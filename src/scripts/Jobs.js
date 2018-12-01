function search(searchTerm, searchList, currentItem){
    if(!searchTerm || searchTerm === ''){
        return []
    } else {
        //remove existing associated jobs from our list
        //first check search by our search term and ensures we're not finding the parent job
        var a = searchList.filter(a => a.jobName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && a.jobCode !== currentItem.jobCode);
        var toSplice = []
        a.forEach(function(value, index){
            var b = currentItem.associated.filter(c => c.jobCode === value.jobCode).slice(0,50);
            if(b.length > 0){
                toSplice.push(index)
            }
        })
    }
    toSplice.forEach(function(value, index){
        a.splice(value-index,1);
    })

    if(a.length>1){
        a.sort(function(b,c){
            return b.jobCode-c.jobCode
        })
    }
    return a.slice(0,50)
}

function add(jobList, currentItem, selectedAssocJob){
    var b = jobList
    var c = b.filter(a => a.jobCode === currentItem.jobCode)
    c[0].associated.push({jobName: selectedAssocJob.jobName, jobCode: selectedAssocJob.jobCode, jobDesc: selectedAssocJob.jobDesc});
    var job = b.filter(a => a.jobCode === currentItem.jobCode);
    return job;
}

function remove(jobList, currentItem, itemToDelete){
    var b = jobList
    var c = b.filter(a => a.jobCode === currentItem.jobCode)
    var d = c[0].associated.findIndex(e => e.jobCode === itemToDelete.jobCode);
    c[0].associated.splice(d,1)

    var job = b.filter(a => a.jobCode === currentItem.jobCode);
    return job
}

function getItemByUrl(list, name, key){
    const results = list.find(a => a[key] === name)
    if(name === "new"){
        return []
    } else {
        return list.find(a => a[key] === name)
    }   
    
}

function searchByTerm(list, name, key, term){
    //remove existing associated jobs from our list
    //first check search by our search term and ensures we're not finding the parent job
    var job = getItemByUrl(list, name, key);
    var a = list.filter(a => a.jobName.toLowerCase().indexOf(term.toLowerCase()) > -1 && a.jobCode !== job.jobCode);
    var toSplice = []
    a.forEach(function(value, index){
        var b = job.associated.filter(c => c.jobCode === value.jobCode).slice(0,50);
        if(b.length > 0){
            toSplice.push(index)
        }
    })

    toSplice.forEach(function(value, index){
        a.splice(value-index,1);
    })

    if(a.length>1){
        a.sort(function(b,c){
            return b.jobCode-c.jobCode
        })
    }

    return a.slice(0,50)
}

module.exports = {
    search, add, getItemByUrl, remove, searchByTerm
}