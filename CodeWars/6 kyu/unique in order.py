def unique_in_order(iterable):
    if iterable == '':
        return []

    tempArr = list(iterable)
    solution = [tempArr[0]]

    for letter in tempArr:
        if letter != solution[-1]:
            solution.append(letter)

    return solution
