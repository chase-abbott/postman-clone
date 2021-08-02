export const getRequest = url => {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const requestWithBody = (url, method, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    credentials: 'include',
    body
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};
