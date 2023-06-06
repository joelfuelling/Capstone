

export function selectedDays(){
    const selectedDays = Array.from(daysRef.current.options)
    .filter(option => option.selected)
    .map(option => option.value);
}