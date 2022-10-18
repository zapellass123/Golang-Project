const fetch = require('node-fetch')
const baseURL = 'https://wnrstore.com'
const api_key = '090a3597-f97e-5a54-8a4c-40eda334fb4b'
/**
 * @description: get account information
 */
const getDataAccount = async (api_key) => {
  try {
    return fetch(`${baseURL}/api/developer/dataAccount?secret_key=${api_key}`)
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
    console.log(response)
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: get list product
 */
const getDataProduct = async (api_key) => {
  try {
    return fetch(`${baseURL}/api/developer/dataProduct?secret_key=${api_key}`)
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: get list operator
 */
const getDataOperator = async (api_key) => {
  try {
    return fetch(`${baseURL}/api/developer/dataOperator?secret_key=${api_key}`)
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: get virtual number status
 */
const checkNumberStatus = async (api_key, phone_number) => {
  try {
    return fetch(`${baseURL}/api/developer/checkNumberStatus?secret_key=${api_key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone_number })
    })
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: make a virtual number request
 */
const createOrder = async (api_key, id_product, id_operator) => {
  try {
    return fetch(`${baseURL}/api/developer/createOrder?secret_key=${api_key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_product, id_operator })
    })
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: resend a virtual number
 */
const resendOrder = async (api_key, id) => {
  try {
    return fetch(`${baseURL}/api/developer/resendOrder?secret_key=${api_key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

/**
 * @description: cancel a virtual number
 */
const cancelOrder = async (api_key, id) => {
  try {
    return fetch(`${baseURL}/api/developer/cancelOrder?secret_key=${api_key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    .then(res => res.json())
    .then(response => {
      return Promise.resolve(response)
    })
  } catch(err) {
    throw new Error(err.message)
  }
}

module.exports = {
  getDataAccount,
  getDataProduct,
  getDataOperator,
  checkNumberStatus,
  createOrder,
  resendOrder,
  cancelOrder
}