function countingMinutes(str){
    const [firstTime , secondTime] = str.split('-')
    let startTime = getMinute(firstTime)
    let endTime = getMinute(secondTime)
    return (endTime - startTime + 1440)%1440
}
function getMinute(timeStr){
    let [hour,minute] = timeStr.slice(0,-2).split(':')
    hour = parseInt(hour)
    minute = parseInt(minute)
    const totalTime = hour * 60 + minute
    const isPm = timeStr.slice(-2) === 'pm'
    return isPm ? totalTime + 720 : totalTime
}
console.log(countingMinutes('12:30pm-12:00am'))