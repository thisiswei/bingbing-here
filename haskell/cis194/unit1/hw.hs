-- toDigits 1234 == [1,2,3,4]
toDigits :: Integer -> [Integer]
toDigits num
  | num <= 0 = []
  | otherwise = toDigits x ++ [y]
      where (x,y) = divMod num 10

-- toDigitsRev num = reverse (toDigits num)
-- toDigitsRev = reverse . toDigits
-- addOneMulpitleTwo = (*2) . (+1)


-- doubleEveryOther' [8,7,6,5] == [16,7,12,5]
doubleEveryOther' :: [Integer] -> [Integer]
doubleEveryOther' xs = zipWith f [0..] (reverse xs)
  where f idx x = if odd idx then x*2 else x

-- doubleEveryOther :: [Integer] -> [Integer]
-- doubleEveryOther [] = []
-- doubleEveryOther [x] = [x*2]
-- doubleEveryOther (x:y:tail) = x*2 : y : doubleEveryOther tail


-- sumDigits [16,7,12,5] = 1 + 6 + 7 + 1 + 2 + 5 = 22
sumDigits' :: [Integer] -> Integer
sumDigits' = sum . concat . (map toDigits)
-- sumDigits :: [Integer] -> Integer
-- sumDigits xs = sum  (concat (map toDigits xs))


-- validate 4012888888881881 = True
validate :: Integer -> Bool
validate = f . sumDigits' . doubleEveryOther' . toDigits
    where f n = let (_, y) = divMod n 10 in y == 0
