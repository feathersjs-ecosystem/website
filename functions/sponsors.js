import fetch from 'node-fetch';

const API_ENDPOINT = 'https://opencollective.com/feathers/members/organizations.json';

exports.handler = async () => {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  const result = data.filter(org => org.isActive && org.role === 'BACKER')
    .sort((first, second) => second.totalAmountDonated - first.totalAmountDonated)
    .splice(0, 3);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(result)
  }
};