def high_and_low(numbers):
    tempArr = numbers.split(" ")
    tempArr.sort(key=int)
    separator = " "
    return separator.join([tempArr[-1], tempArr[0]])
