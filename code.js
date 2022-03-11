let birthYear = prompt("what year were you born? ")
let birthMonth = prompt ("what month of " + birthYear + " were you born in? (in the form of a two digit number)")


let secondsFromBirth = function(birthYear, birthMonth){
    let currentMonth = new Date().getMonth() + 1 
    let currentYear = new Date().getFullYear()

    birthYear = Number(birthYear)
    birthMonth = Number(birthMonth)

    let monthsToSeconds = 60 * 60 * 24 * 30.4375
    let yearsToSeconds = monthsToSeconds * 12

    let monthsInSecondFromBirthday = (12 - birthMonth) * monthsToSeconds
    let birthYearToCurrentYear = (currentYear - birthYear - 1) * yearsToSeconds
    let currentMonthInSeconds = currentMonth * monthsToSeconds

    let secondsFromBirth = monthsInSecondFromBirthday + birthYearToCurrentYear + currentMonthInSeconds

    return secondsFromBirth
}

totalSecondsforBirthday = secondsFromBirth(birthYear, birthMonth)

document.write("There has been approximately " + totalSecondsforBirthday + " seconds since you were born" )


