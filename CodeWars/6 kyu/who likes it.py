def likes(names):
    likes = len(names)
    suppAmount = likes - 2
    if likes == 0:
        return 'no one likes this'
    elif likes == 1:
        return names[0] + ' likes this'
    elif likes == 2:
        return names[0] + ' and ' + names[1] + ' like this'
    elif likes == 3:
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    elif likes > 3:
        return names[0] + ', ' + names[1] + ' and ' + str(suppAmount) + ' others like this'
        
# Test.assert_equals(likes([]), 'no one likes this')
# Test.assert_equals(likes(['Peter']), 'Peter likes this')
# Test.assert_equals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
# Test.assert_equals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
# Test.assert_equals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')
