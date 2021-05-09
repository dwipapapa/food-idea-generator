namespace SpriteKind {
    export const TextSprite = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (categoryIndex < 4) {
        if (categoryIndex == 0) {
            rouletteSprite = word.createTextSprite(FlavourList[IngredientsIndex], 15, 1)
        } else if (categoryIndex == 1) {
            rouletteSprite = word.createTextSprite(NameList[NameIndex], 15, 1)
        } else if (categoryIndex == 2) {
            rouletteSprite = word.createTextSprite(IngredientsList[FlavourIndex], 15, 1)
        } else {
            rouletteSprite = word.createTextSprite(Ingredient2List[Ingredient2Index], 15, 1)
        }
        rouletteSprite.y = topHeadingOffset + lineHeight * (categoryIndex * 2) + lineHeight
        categoryIndex += 1
    } else {
        game.reset()
    }
})
function Create_Lists () {
    NameList = [
    "Fried Rice",
    "Mac-n-Cheese",
    "Soup",
    "Ramen",
    "Cake",
    "Biscuit",
    "Burger",
    "Sandwitch",
    "Taco",
    "Donut",
    "Pancakes",
    "Pizza",
    "Chips",
    "Shushi"
    ]
    FlavourList = [
    "Spicy",
    "Mild",
    "Sour",
    "Salty",
    "Umami",
    "Sweet",
    "Extra Spicy",
    "Very Sweet",
    "Very Salty",
    "Extra Sour"
    ]
    IngredientsList = [
    "Pepper",
    "no Tomatoes",
    "Carrots",
    "Pasta",
    "no Cheese",
    "Cheese",
    "Mushrooms",
    "no Pasta",
    "no Mushrooms",
    "Tomatoes",
    "Beans",
    "no Beans",
    "Butter",
    "no Butter"
    ]
    Ingredient2List = [
    "Milk",
    "no Milk",
    "Yoghurt",
    "Fish",
    "Salad",
    "no Salad",
    "Chocolate",
    "Jam",
    "Sausages",
    "Juice",
    "Eggs",
    "no Eggs",
    "Coffee",
    "no Coffee"
    ]
}
function createHeadings () {
    text_list = ["Make a", "", "With", "And"]
    while (index <= text_list.length - 1) {
        currentHeading = word.createTextSprite(text_list[index], 15, 7)
        currentHeading.left = 5
        currentHeading.y = lineHeight * (index * 2) + topHeadingOffset
        index += 1
    }
}
function createRouletteSprite (text: string, y: number) {
    rouletteSprite = word.createTextSprite(text, 15, 1)
    rouletteSprite.setKind(SpriteKind.TextSprite)
    rouletteSprite.y = y
    rouletteSprite.right = 0
    rouletteSprite.setVelocity(500, 0)
}
let spinningOffset = 0
let currentHeading: Sprite = null
let index = 0
let text_list: string[] = []
let Ingredient2List: string[] = []
let IngredientsList: string[] = []
let NameList: string[] = []
let FlavourList: string[] = []
let rouletteSprite: Sprite = null
let lineHeight = 0
let topHeadingOffset = 0
let categoryIndex = 0
let IngredientsIndex = 0
let Ingredient2Index = 0
let FlavourIndex = 0
let NameIndex = 0
NameIndex = 0
FlavourIndex = 0
Ingredient2Index = 0
IngredientsIndex = 0
categoryIndex = 0
Create_Lists()
topHeadingOffset = 20
lineHeight = 10
createHeadings()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.TextSprite)) {
        if (value.left > scene.screenWidth()) {
            value.destroy()
        }
    }
})
game.onUpdateInterval(200, function () {
    spinningOffset = topHeadingOffset + lineHeight
    if (categoryIndex < 1) {
        IngredientsIndex = (IngredientsIndex + 1) % FlavourList.length
        createRouletteSprite(FlavourList[IngredientsIndex], spinningOffset)
    }
    spinningOffset += lineHeight * 2
    if (categoryIndex < 2) {
        NameIndex = (NameIndex + 1) % NameList.length
        createRouletteSprite(NameList[NameIndex], spinningOffset)
    }
    spinningOffset += lineHeight * 2
    if (categoryIndex < 3) {
        FlavourIndex = (FlavourIndex + 1) % IngredientsList.length
        createRouletteSprite(IngredientsList[FlavourIndex], spinningOffset)
    }
    spinningOffset += lineHeight * 2
    if (categoryIndex < 4) {
        Ingredient2Index = (Ingredient2Index + 1) % Ingredient2List.length
        createRouletteSprite(Ingredient2List[Ingredient2Index], spinningOffset)
    }
})
