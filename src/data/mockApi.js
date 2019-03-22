// dummy functions
// used to retrieve data without api
import sampleData from './sampleData.js';

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchSampleData = () => {
    return delay(1000).then(() => {
        return Promise.resolve(sampleData.events)
    })
}