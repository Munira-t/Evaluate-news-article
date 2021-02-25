/* Import isURL function from js file */
import isURL from './validateURL.js'

const handleSubmit = async () => {
  /* Get submitted article url from DOM element. */
  const articleUrl = document.getElementById('url').value
  console.log(`user input: ${articleUrl}`)

  /* Cheack if the submitted URL is valide or not. */
  if (isURL(articleUrl)) {
    /* Post data to server API, update UI with received data within the Post function. */
    await postData('http://localhost:8087/add', {
      articleUrl,
    })
  } else {
    alert('Please Enter Valid Article URL!')
  }
}

/* Post Data To Server API. */
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
    const meaningCloudData = await response.json()
    /* Update UI with received data. */
    updateUI(meaningCloudData)

    /* Handle error if occur */
  } catch (error) {
    console.error(error.message)
  }
}

/* Update UI */
const updateUI = (meaningCloudData) => {
  /**
   * Get DOM element with the specified id
   * then set its text content value with the received data from API
   * (Score, agreement, subjectivity, confidence, irony).
   */
  document.getElementById('polarity').textContent = getPolarity(meaningCloudData.score)
  document.getElementById('agreement').textContent = meaningCloudData.agreement
  document.getElementById('subjectivity').textContent = meaningCloudData.subjectivity
  document.getElementById('confidence').textContent = meaningCloudData.confidence
  document.getElementById('irony').textContent = meaningCloudData.irony
}

/* Display [full form] of 'polarity' Score_tag. */
const getPolarity = (polarityScore) => {
  if (polarityScore === 'P+') {
    return 'Strong Positive'
  } else if (polarityScore === 'P') {
    return 'Positive'
  } else if (polarityScore === 'NEU') {
    return 'Neutral'
  } else if (polarityScore === 'N') {
    return 'Negative'
  } else if (polarityScore === 'N+') {
    return 'Strong Negative'
  } else if (polarityScore === 'NONE') {
    return 'Without Sentiment'
  } else {
    return polarityScore
  }
}

export default handleSubmit