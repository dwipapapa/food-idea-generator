@namespace
class SpriteKind:
    TextSprite = SpriteKind.create()

def on_a_pressed():
    global rouletteSprite, categoryIndex
    if categoryIndex < 4:
        if categoryIndex == 0:
            rouletteSprite = word.create_text_sprite(FlavourList[IngredientsIndex], 15, 1)
        elif categoryIndex == 1:
            rouletteSprite = word.create_text_sprite(NameList[NameIndex], 15, 1)
        elif categoryIndex == 2:
            rouletteSprite = word.create_text_sprite(IngredientsList[FlavourIndex], 15, 1)
        else:
            rouletteSprite = word.create_text_sprite(Ingredient2List[Ingredient2Index], 15, 1)
        rouletteSprite.y = topHeadingOffset + lineHeight * (categoryIndex * 2) + lineHeight
        categoryIndex += 1
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def createHeadings():
    global text_list, currentHeading
    text_list = ["Make a", "", "With", "And"]
    index = 0
    while index <= len(text_list) - 1:
        currentHeading = word.create_text_sprite(text_list[index], 15, 7)
        currentHeading.left = 5
        currentHeading.y = lineHeight * (index * 2) + topHeadingOffset
        index += 1
def createRouletteSprite(text: str, y: number):
    global rouletteSprite
    rouletteSprite = word.create_text_sprite(text, 15, 1)
    rouletteSprite.set_kind(SpriteKind.TextSprite)
    rouletteSprite.y = y
    rouletteSprite.right = 0
    rouletteSprite.set_velocity(500, 0)
spinningOffset = 0
currentHeading: Sprite = None
text_list: List[str] = []
rouletteSprite: Sprite = None
lineHeight = 0
topHeadingOffset = 0
Ingredient2List: List[str] = []
IngredientsList: List[str] = []
FlavourList: List[str] = []
NameList: List[str] = []
categoryIndex = 0
IngredientsIndex = 0
Ingredient2Index = 0
FlavourIndex = 0
NameIndex = 0
NameIndex = 0
FlavourIndex = 0
Ingredient2Index = 0
IngredientsIndex = 0
categoryIndex = 0
NameList = ["Fried Rice",
    "Mac-n-Cheese",
    "Soup",
    "Ramen",
    "Cake",
    "Biscuit"]
FlavourList = ["Spicy",
 "Mild",
 "Sour",
 "Salty",
 "Umami"]
IngredientsList = ["Pepper",
    "no Tomatoes",
    "Carrots",
    "Pasta",
    "no Cheese",
    "Cheese",
    "Mushrooms",
    "no Pasta",
    "no Mushrooms",
    "Tomatoes"]
Ingredient2List = ["Milk",
    "no Milk",
    "Yoghurt",
    "Fish",
    "Salad",
    "no Salad",
    "Chocolate",
    "Jam",
    "Sausages",
    "Juice"]
topHeadingOffset = 20
lineHeight = 10
createHeadings()

def on_on_update():
    for value in sprites.all_of_kind(SpriteKind.TextSprite):
        if value.left > scene.screen_width():
            value.destroy()
game.on_update(on_on_update)

def on_update_interval():
    global spinningOffset, IngredientsIndex, NameIndex, FlavourIndex, Ingredient2Index
    spinningOffset = topHeadingOffset + lineHeight
    if categoryIndex < 1:
        IngredientsIndex = (IngredientsIndex + 1) % len(FlavourList)
        createRouletteSprite(FlavourList[IngredientsIndex], spinningOffset)
    spinningOffset += lineHeight * 2
    if categoryIndex < 2:
        NameIndex = (NameIndex + 1) % len(NameList)
        createRouletteSprite(NameList[NameIndex], spinningOffset)
    spinningOffset += lineHeight * 2
    if categoryIndex < 3:
        FlavourIndex = (FlavourIndex + 1) % len(IngredientsList)
        createRouletteSprite(IngredientsList[FlavourIndex], spinningOffset)
    spinningOffset += lineHeight * 2
    if categoryIndex < 4:
        Ingredient2Index = (Ingredient2Index + 1) % len(Ingredient2List)
        createRouletteSprite(Ingredient2List[Ingredient2Index], spinningOffset)
game.on_update_interval(200, on_update_interval)
