def nb_year(p0, percent, aug, p):
    currentPopulation = p0
    limit = p
    variance = aug
    rate = percent/100
    yearsNeeded = 0

    while currentPopulation < limit:
        currentPopulation = currentPopulation*(1+rate) + variance
        yearsNeeded += 1
        print(yearsNeeded)

    return yearsNeeded




# Test.describe("nb_year")
# Test.it("Basic tests")
# Test.assert_equals(nb_year(1500, 5, 100, 5000), 15)
# Test.assert_equals(nb_year(1500000, 2.5, 10000, 2000000), 10)
# Test.assert_equals(nb_year(1500000, 0.25, 1000, 2000000), 94)
