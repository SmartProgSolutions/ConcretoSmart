import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()


    const dates = []
    let compareDate = firstDayOfTheYear

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}

// gera datas apartir do dia 01/01/2023 até o dia atual