const baseApi = setBaseApi();

function setBaseApi(){
    var result;
    window.location.hostname === "localhost" ? result = "mernapdev:3001" : result = "mernapdev:3001"
    return result;
}

const apiService = {
    auth(){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/auth`, {
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => {
                resolve(json)
              })
              .catch(err => {
                reject(err);
              })
        })
    },
    getEmpName(){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/employee/name`, {
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    },
    getEmpComponents(){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/employee/components`)
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    },
    getVisits(period){
        var params = '';
        if(period.start){
            params = `?pps=${period.start}&ppe=${period.end}`
        } else {
            params = `?status=${period.status}`
        }
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/visits${params}`, {
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    },
    putVisits(data){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/visits`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    },
    postWorkflow(period){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/workflow/submit`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(period),
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    },
    getJobs(){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/jobs`, {
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    },
    updateJobs(job){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/jobs`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(job),
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    },
    getTimeCodes(param){
        return new Promise((resolve, reject) => {
            fetch(`https://${baseApi}/api/v1/timecodes?filter=${param}`, {
                credentials: 'include'
            })
              .then(response => response.json())
              .then(json => resolve(json))
              .catch(err => {
                reject(err);
              })
        })
    }
}

export default apiService