data Family = Xiong
            | Tu
            | Xiongma
            | Xiaobao
    deriving Show



isStupid :: Family -> Bool
isStupid Xiong = True
isStupid _ = False


data Person = P String Int Family
  deriving Show


bingbing = P "bingbing" 18 Tu
wei = P "wei" 58 Xiong

getAge :: Person -> Int
getAge (P _ age _) = age


data Tree = Leaf Char
          | Node Tree Char Tree


mytree :: Tree
mytree = Node (Leaf 'x') 'a' (Node (Leaf 'y') 'b' (Leaf 'z'))

youtree = Node
    (Leaf 'x')
    'a'
    (Node
        (Leaf 'y')
        'b'
        (Node
            (Leaf 'z')
            'c'
            (Leaf 'g')))





getHeight :: Tree -> Int
getHeight (Leaf _) = 0
getHeight (Node l _ r) = 1 + max (getHeight l) (getHeight r)

-- getHeight mytree == 2


