// =====================================================
// MENU-DATA.JS — Complete Café Fleur Menu
// =====================================================
// Images: source.unsplash.com with unique ?sig= per item
// so every item gets its own cached, keyword-correct photo.
// Prices shown are REGULAR prices in INR (₹).
// =====================================================

const MENU_DATA = [

  // ══════════════════════════════════════════════════
  // BEVERAGES
  // ══════════════════════════════════════════════════

  // ── Black Coffee & Espresso ──
  {
    name: 'Espresso & Black',
    icon: '☕',
    items: [
      { id: 1,  name: 'Espresso (50ml)',     description: 'Classic short-pull espresso shot',        price: 39,  image: 'https://source.unsplash.com/400x300/?espresso&sig=1' },
      { id: 2,  name: 'Doppi (60ml)',        description: 'Double shot espresso, bold & intense',    price: 59,  image: 'https://source.unsplash.com/400x300/?espresso,double&sig=2' },
      { id: 3,  name: 'Hot Americano Black', description: 'Espresso diluted with hot water',         price: 79,  image: 'https://source.unsplash.com/400x300/?americano,black-coffee&sig=3' },
      { id: 4,  name: 'Iced Americano',      description: 'Espresso over ice, refreshingly bold',    price: 129, image: 'https://source.unsplash.com/400x300/?iced-americano,cold-coffee&sig=4' }
    ]
  },

  // ── Brew Coffee (Manual) ──
  {
    name: 'Brew Coffee',
    icon: '🫖',
    items: [
      { id: 5,  name: 'Cold Brew',         description: 'Slow-steeped 12 hrs, smooth & rich',      price: 99,  image: 'https://source.unsplash.com/400x300/?cold-brew,coffee&sig=5' },
      { id: 6,  name: 'French Press',      description: 'Full-bodied manual brew coffee',           price: 99,  image: 'https://source.unsplash.com/400x300/?french-press,coffee&sig=6' },
      { id: 7,  name: 'Pour Over Coffee',  description: 'Precision pour for a clean, bright cup',   price: 99,  image: 'https://source.unsplash.com/400x300/?pour-over,coffee&sig=7' }
    ]
  },

  // ── Cold Coffee & Frappes ──
  {
    name: 'Cold Coffee',
    icon: '🧊',
    items: [
      { id: 8,  name: 'Café Frappe',                description: 'Classic blended iced café frappe',        price: 149, image: 'https://source.unsplash.com/400x300/?frappe,iced-coffee&sig=8' },
      { id: 9,  name: 'Hazelnut Frappe',            description: 'Rich hazelnut swirled iced frappe',       price: 149, image: 'https://source.unsplash.com/400x300/?hazelnut,frappe&sig=9' },
      { id: 10, name: 'Cinnamon Frappe',            description: 'Warm cinnamon spice in a cold blend',     price: 149, image: 'https://source.unsplash.com/400x300/?cinnamon,coffee&sig=10' },
      { id: 11, name: 'Caramel Frappe',             description: 'Sweet caramel blended cold coffee',       price: 149, image: 'https://source.unsplash.com/400x300/?caramel,frappe&sig=11' },
      { id: 12, name: 'Caramel Popcorn Frappe',     description: 'Caramel popcorn infused cold blend',      price: 149, image: 'https://source.unsplash.com/400x300/?caramel-popcorn,drink&sig=12' },
      { id: 13, name: 'Peanut Butter Frappe',       description: 'Creamy peanut butter blended frappe',     price: 149, image: 'https://source.unsplash.com/400x300/?peanut-butter,shake&sig=13' },
      { id: 14, name: 'Chocolate Cold Coffee Frappe', description: 'Decadent chocolate cold coffee blend',  price: 149, image: 'https://source.unsplash.com/400x300/?chocolate,frappe&sig=14' },
      { id: 15, name: 'Non Sugar Cold Coffee',      description: 'Sugar-free iced coffee delight',          price: 129, image: 'https://source.unsplash.com/400x300/?iced-coffee,sugar-free&sig=15' }
    ]
  },

  // ── Flavoured Iced Coffee ──
  {
    name: 'Flavoured Iced Coffee',
    icon: '🍓',
    items: [
      { id: 16, name: 'Cranberry Coffee',  description: 'Tangy cranberry meets bold cold coffee',   price: 149, image: 'https://source.unsplash.com/400x300/?cranberry,drink&sig=16' },
      { id: 17, name: 'Orange Coffee',     description: 'Zesty orange blended with iced coffee',   price: 129, image: 'https://source.unsplash.com/400x300/?orange,cold-drink&sig=17' },
      { id: 18, name: 'Guava Coffee',      description: 'Tropical guava & chilled coffee fusion',  price: 129, image: 'https://source.unsplash.com/400x300/?guava,tropical-drink&sig=18' },
      { id: 19, name: 'Lychee Coffee',     description: 'Exotic lychee with a coffee kick',        price: 129, image: 'https://source.unsplash.com/400x300/?lychee,drink&sig=19' },
      { id: 20, name: 'Apple Coffee',      description: 'Crisp apple flavour with cold coffee',    price: 125, image: 'https://source.unsplash.com/400x300/?apple,cold-drink&sig=20' }
    ]
  },

  // ── Hot Chocolate Coffee ──
  {
    name: 'Hot Chocolate',
    icon: '🍫',
    items: [
      { id: 21, name: 'Classic Hot Chocolate',     description: 'Velvety smooth cocoa indulgence',         price: 139, image: 'https://source.unsplash.com/400x300/?hot-chocolate,cocoa&sig=21' },
      { id: 22, name: 'Hot Chocolate Next Level',  description: 'Extra rich premium chocolate brew',        price: 179, image: 'https://source.unsplash.com/400x300/?hot-chocolate,mug&sig=22' },
      { id: 23, name: 'Nutella Hot Chocolate',     description: 'Creamy Nutella melted into hot cocoa',     price: 179, image: 'https://source.unsplash.com/400x300/?nutella,chocolate-drink&sig=23' },
      { id: 24, name: 'Caramel Hot Chocolate',     description: 'Hot chocolate drizzled with caramel',      price: 179, image: 'https://source.unsplash.com/400x300/?caramel,hot-chocolate&sig=24' },
      { id: 25, name: 'Kit-Kat Hot Chocolate',     description: 'Kit-Kat crunch meets steaming cocoa',      price: 179, image: 'https://source.unsplash.com/400x300/?chocolate,wafer&sig=25' }
    ]
  },

  // ── Hot Coffee ──
  {
    name: 'Hot Coffee',
    icon: '☕',
    items: [
      { id: 26, name: 'Cappuccino Hot',         description: 'Classic espresso with steamed milk foam',   price: 79,  image: 'https://source.unsplash.com/400x300/?cappuccino&sig=26' },
      { id: 27, name: 'Light Hot Latte',        description: 'Smooth espresso with silky steamed milk',   price: 89,  image: 'https://source.unsplash.com/400x300/?latte,coffee&sig=27' },
      { id: 28, name: 'Hot Chocolate Latte',    description: 'Chocolate-infused espresso latte',          price: 89,  image: 'https://source.unsplash.com/400x300/?mocha,latte&sig=28' },
      { id: 29, name: 'Hot Hazelnut Latte',     description: 'Aromatic hazelnut espresso latte',          price: 109, image: 'https://source.unsplash.com/400x300/?hazelnut,latte&sig=29' },
      { id: 30, name: 'Caramel Latte Hot',      description: 'Sweet caramel drizzled latte',              price: 109, image: 'https://source.unsplash.com/400x300/?caramel,latte&sig=30' },
      { id: 31, name: 'Peanut Butter Latte Hot',description: 'Nutty peanut butter espresso fusion',       price: 129, image: 'https://source.unsplash.com/400x300/?peanut-butter,latte&sig=31' },
      { id: 32, name: 'Spanish Latte',          description: 'Condensed milk espresso latte',             price: 129, image: 'https://source.unsplash.com/400x300/?spanish-latte,coffee&sig=32' },
      { id: 33, name: 'Kashmiri Latte',         description: 'Saffron & cardamom spiced latte',           price: 135, image: 'https://source.unsplash.com/400x300/?saffron,spiced-coffee&sig=33' }
    ]
  },

  // ── Iced Tea ──
  {
    name: 'Iced Tea',
    icon: '🍋',
    items: [
      { id: 34, name: 'Lemon Ice Tea',      description: 'Classic chilled lemon iced tea',         price: 139, image: 'https://source.unsplash.com/400x300/?lemon-iced-tea&sig=34' },
      { id: 35, name: 'Peach Ice Tea',      description: 'Sweet peachy chilled tea',               price: 139, image: 'https://source.unsplash.com/400x300/?peach-tea,iced&sig=35' },
      { id: 36, name: 'Blueberry Ice Tea',  description: 'Tangy blueberry brew over ice',          price: 149, image: 'https://source.unsplash.com/400x300/?blueberry,iced-tea&sig=36' },
      { id: 37, name: 'Mix Berry Ice Tea',  description: 'Mixed berry medley on crushed ice',      price: 149, image: 'https://source.unsplash.com/400x300/?berry,iced-tea&sig=37' },
      { id: 38, name: 'Mango Ice Tea',      description: 'Tropical mango chilled tea',             price: 149, image: 'https://source.unsplash.com/400x300/?mango,iced-tea&sig=38' },
      { id: 39, name: 'Orange Ice Tea',     description: 'Fresh orange citrus iced tea',           price: 149, image: 'https://source.unsplash.com/400x300/?orange,iced-tea&sig=39' },
      { id: 40, name: 'Masala Ice Tea',     description: 'Spiced masala tea served chilled',       price: 149, image: 'https://source.unsplash.com/400x300/?spiced-tea,masala&sig=40' }
    ]
  },

  // ── Iced Coffee ──
  {
    name: 'Iced Coffee',
    icon: '🥤',
    items: [
      { id: 41, name: 'Iced Cappuccino',       description: 'Chilled cappuccino over ice',               price: 139, image: 'https://source.unsplash.com/400x300/?iced-cappuccino&sig=41' },
      { id: 42, name: 'Iced Latte',            description: 'Espresso & milk served ice cold',            price: 139, image: 'https://source.unsplash.com/400x300/?iced-latte&sig=42' },
      { id: 43, name: 'Iced Chocolate Latte',  description: 'Chocolate espresso on crushed ice',          price: 139, image: 'https://source.unsplash.com/400x300/?iced-mocha,chocolate&sig=43' },
      { id: 44, name: 'Iced Hazelnut Latte',   description: 'Hazelnut espresso chilled to perfection',    price: 139, image: 'https://source.unsplash.com/400x300/?hazelnut,iced-coffee&sig=44' },
      { id: 45, name: 'Iced Caramel Latte',    description: 'Caramel drizzled iced espresso latte',       price: 139, image: 'https://source.unsplash.com/400x300/?caramel,iced-coffee&sig=45' }
    ]
  },

  // ── Margherita (Drinks) ──
  {
    name: 'Margherita',
    icon: '🍓',
    items: [
      { id: 46, name: 'Strawberry Margherita', description: 'Fresh strawberry blended margherita',  price: 149, image: 'https://source.unsplash.com/400x300/?strawberry,smoothie&sig=46' },
      { id: 47, name: 'Mango Margherita',      description: 'Tropical mango margherita slush',      price: 149, image: 'https://source.unsplash.com/400x300/?mango,slush&sig=47' },
      { id: 48, name: 'Pineapple Margherita',  description: 'Tangy pineapple chilled margherita',   price: 149, image: 'https://source.unsplash.com/400x300/?pineapple,drink&sig=48' },
      { id: 49, name: 'Blueberry Margherita',  description: 'Blueberry burst margherita slush',     price: 149, image: 'https://source.unsplash.com/400x300/?blueberry,smoothie&sig=49' },
      { id: 50, name: 'Mixed Berry Margherita',description: 'Berry medley margherita delight',       price: 149, image: 'https://source.unsplash.com/400x300/?mixed-berry,drink&sig=50' }
    ]
  },

  // ── Matcha (Cold) ──
  {
    name: 'Matcha',
    icon: '🍵',
    items: [
      { id: 51, name: 'Matcha Latte',          description: 'Premium ceremonial matcha with milk',  price: 199, image: 'https://source.unsplash.com/400x300/?matcha-latte&sig=51' },
      { id: 52, name: 'Matcha Cappuccino',     description: 'Frothy matcha layered cappuccino',     price: 199, image: 'https://source.unsplash.com/400x300/?matcha,cappuccino&sig=52' },
      { id: 53, name: 'Hazelnut Matcha Latte', description: 'Hazelnut-infused cold matcha latte',   price: 225, image: 'https://source.unsplash.com/400x300/?matcha,hazelnut&sig=53' },
      { id: 54, name: 'Caramel Matcha Latte',  description: 'Sweet caramel swirled matcha latte',   price: 225, image: 'https://source.unsplash.com/400x300/?matcha,caramel&sig=54' },
      { id: 55, name: 'Cinnamon Matcha Latte', description: 'Warm cinnamon spiced cold matcha',     price: 225, image: 'https://source.unsplash.com/400x300/?matcha,cinnamon&sig=55' }
    ]
  },

  // ── Mojitos ──
  {
    name: 'Mojitos',
    icon: '🍃',
    items: [
      { id: 56, name: 'Virgin Mojito',        description: 'Fresh mint & lime, sparkling cold',      price: 119, image: 'https://source.unsplash.com/400x300/?mojito,mint&sig=56' },
      { id: 57, name: 'Cold Blue Mojito',     description: 'Blue curacao tinted mint mojito',        price: 119, image: 'https://source.unsplash.com/400x300/?blue,cocktail&sig=57' },
      { id: 58, name: 'Watermelon Mojito',    description: 'Juicy watermelon & mint soda cooler',    price: 119, image: 'https://source.unsplash.com/400x300/?watermelon,drink&sig=58' },
      { id: 59, name: 'Cranberry Mojito',     description: 'Tart cranberry with fresh mint fizz',    price: 129, image: 'https://source.unsplash.com/400x300/?cranberry,cocktail&sig=59' },
      { id: 60, name: 'Passion Fruit Mojito', description: 'Tropical passion fruit mint soda',       price: 119, image: 'https://source.unsplash.com/400x300/?passion-fruit,drink&sig=60' },
      { id: 61, name: 'Mix Berry Mojito',     description: 'Berry medley with lime & mint fizz',     price: 129, image: 'https://source.unsplash.com/400x300/?berry,mocktail&sig=61' },
      { id: 62, name: 'Green Apple Mojito',   description: 'Crisp green apple mint sparkler',        price: 119, image: 'https://source.unsplash.com/400x300/?apple,green-drink&sig=62' },
      { id: 63, name: 'Blood Orange Mojito',  description: 'Bold blood orange with soda & mint',     price: 119, image: 'https://source.unsplash.com/400x300/?blood-orange,drink&sig=63' },
      { id: 64, name: 'Pinacolada Mojito',    description: 'Pineapple coconut mint mojito fusion',   price: 119, image: 'https://source.unsplash.com/400x300/?pineapple,coconut-drink&sig=64' },
      { id: 65, name: 'Tangy Orange',         description: 'Tangy citrus orange cooler with fizz',   price: 69,  image: 'https://source.unsplash.com/400x300/?orange-juice,tangy&sig=65' },
      { id: 66, name: 'Coffee Mojito',        description: 'Cold coffee meets mint lime mojito',      price: 125, image: 'https://source.unsplash.com/400x300/?coffee,mojito&sig=66' }
    ]
  },

  // ── Shakes ──
  {
    name: 'Shakes',
    icon: '🥛',
    items: [
      { id: 67, name: 'Chocolate Shake',      description: 'Rich creamy chocolate milkshake',        price: 159, image: 'https://source.unsplash.com/400x300/?chocolate-milkshake&sig=67' },
      { id: 68, name: 'Butter Scotch Shake',  description: 'Sweet butterscotch creamy shake',        price: 159, image: 'https://source.unsplash.com/400x300/?butterscotch,milkshake&sig=68' },
      { id: 69, name: 'Mango Shake',          description: 'Fresh mango pulp chilled shake',         price: 159, image: 'https://source.unsplash.com/400x300/?mango,milkshake&sig=69' },
      { id: 70, name: 'Pineapple Shake',      description: 'Tropical pineapple chilled shake',       price: 149, image: 'https://source.unsplash.com/400x300/?pineapple,shake&sig=70' },
      { id: 71, name: 'Black Currant Shake',  description: 'Deep berry black currant shake',         price: 159, image: 'https://source.unsplash.com/400x300/?blackcurrant,smoothie&sig=71' },
      { id: 72, name: 'Strawberry Shake',     description: 'Fresh strawberry creamy shake',          price: 179, image: 'https://source.unsplash.com/400x300/?strawberry-milkshake&sig=72' },
      { id: 73, name: 'Oreo Shake',           description: 'Crushed Oreo blended shake',             price: 179, image: 'https://source.unsplash.com/400x300/?oreo,milkshake&sig=73' },
      { id: 74, name: 'Kit-Kat Shake',        description: 'Kit-Kat chunks blended in milkshake',    price: 179, image: 'https://source.unsplash.com/400x300/?kitkat,chocolate-shake&sig=74' },
      { id: 75, name: 'Kesar Pista Shake',    description: 'Saffron & pistachio rich shake',         price: 179, image: 'https://source.unsplash.com/400x300/?pistachio,saffron-drink&sig=75' },
      { id: 76, name: 'Banana Shake',         description: 'Creamy banana blended milkshake',        price: 139, image: 'https://source.unsplash.com/400x300/?banana,milkshake&sig=76' },
      { id: 77, name: 'Lotus Biscoff Shake',  description: 'Lotus Biscoff cookie cream shake',       price: 199, image: 'https://source.unsplash.com/400x300/?biscoff,cookie-shake&sig=77' }
    ]
  },

  // ── Soda & Tea ──
  {
    name: 'Soda & Tea',
    icon: '🫧',
    items: [
      { id: 78, name: 'Fresh Lime Soda',  description: 'Freshly squeezed lime with soda',       price: 109, image: 'https://source.unsplash.com/400x300/?lime,soda&sig=78' },
      { id: 79, name: 'Masala Soda',      description: 'Spiced masala soda with chaat twist',   price: 119, image: 'https://source.unsplash.com/400x300/?spiced,soda&sig=79' },
      { id: 80, name: 'Tea',              description: 'Classic hot chai brewed fresh',          price: 30,  image: 'https://source.unsplash.com/400x300/?chai,tea-cup&sig=80' },
      { id: 81, name: 'Water Bottle',     description: 'Chilled packaged mineral water',        price: 20,  image: 'https://source.unsplash.com/400x300/?water-bottle&sig=81' }
    ]
  },

  // ══════════════════════════════════════════════════
  // FOOD MENU
  // ══════════════════════════════════════════════════

  // ── Appetizers ──
  {
    name: 'Appetizers',
    icon: '🍟',
    items: [
      { id: 82,  name: 'Peri Peri Fries',            description: 'Crispy fries tossed in peri peri spice',   price: 99,  image: 'https://source.unsplash.com/400x300/?peri-peri,fries&sig=82' },
      { id: 83,  name: 'French Fries',               description: 'Golden salted crispy french fries',        price: 99,  image: 'https://source.unsplash.com/400x300/?french-fries&sig=83' },
      { id: 84,  name: 'Cheesy French Fries',        description: 'Fries loaded with melted cheese sauce',    price: 99,  image: 'https://source.unsplash.com/400x300/?cheese-fries&sig=84' },
      { id: 85,  name: 'Honey Chilli Potato',        description: 'Crispy potato in honey chilli glaze',      price: 169, image: 'https://source.unsplash.com/400x300/?honey,potato&sig=85' },
      { id: 86,  name: 'Crispy Potato Wedges',       description: 'Thick-cut seasoned potato wedges',         price: 149, image: 'https://source.unsplash.com/400x300/?potato-wedges&sig=86' },
      { id: 87,  name: 'Chilli Paneer',              description: 'Indo-Chinese style chilli paneer',         price: 199, image: 'https://source.unsplash.com/400x300/?paneer,chilli&sig=87' },
      { id: 88,  name: 'Chilli Chicken',             description: 'Crispy chicken in spicy chilli sauce',     price: 219, image: 'https://source.unsplash.com/400x300/?chilli-chicken&sig=88' },
      { id: 89,  name: 'Veg Manchurian',             description: 'Fried veg balls in Manchurian sauce',      price: 179, image: 'https://source.unsplash.com/400x300/?manchurian,indian-food&sig=89' },
      { id: 90,  name: 'Malai Chaap',               description: 'Tender soya chaap in malai marinade',      price: 169, image: 'https://source.unsplash.com/400x300/?soya-chaap,indian&sig=90' },
      { id: 91,  name: 'Afghani Chaap',             description: 'Creamy Afghani spiced soya chaap',         price: 169, image: 'https://source.unsplash.com/400x300/?afghani,grilled&sig=91' },
      { id: 92,  name: 'Soya Chaap',               description: 'Chargrilled soya chaap classic',           price: 169, image: 'https://source.unsplash.com/400x300/?soya,grilled&sig=92' },
      { id: 93,  name: 'Crispy Corn',              description: 'Fried corn tossed with spices & herbs',    price: 159, image: 'https://source.unsplash.com/400x300/?corn,crispy&sig=93' },
      { id: 94,  name: 'Sweet Corn',               description: 'Buttered sweet corn with spice',           price: 99,  image: 'https://source.unsplash.com/400x300/?sweet-corn&sig=94' },
      { id: 95,  name: 'Honey Chilli Chicken',     description: 'Juicy chicken in honey chilli sauce',      price: 149, image: 'https://source.unsplash.com/400x300/?honey-chicken&sig=95' },
      { id: 96,  name: 'Fried Chicken',            description: 'Golden fried crispy chicken pieces',       price: 299, image: 'https://source.unsplash.com/400x300/?fried-chicken&sig=96' },
      { id: 97,  name: 'Fish & Chips',             description: 'Beer-battered fish with crispy chips',     price: 349, image: 'https://source.unsplash.com/400x300/?fish-chips&sig=97' },
      { id: 98,  name: 'Veg Spring Roll',          description: 'Crispy veg-stuffed spring rolls',         price: 99,  image: 'https://source.unsplash.com/400x300/?spring-roll,veg&sig=98' },
      { id: 99,  name: 'Kurkure Spring Roll',      description: 'Extra-crunchy kurkure spring rolls',      price: 199, image: 'https://source.unsplash.com/400x300/?crispy-roll&sig=99' },
      { id: 100, name: 'Kurkure Chicken Spring Roll',description: 'Chicken-filled crispy kurkure rolls',   price: 199, image: 'https://source.unsplash.com/400x300/?chicken-roll,crispy&sig=100' },
      { id: 101, name: 'Chicken Spring Roll',      description: 'Classic chicken-stuffed fried rolls',      price: 249, image: 'https://source.unsplash.com/400x300/?chicken,spring-roll&sig=101' }
    ]
  },

  // ── Mains (Rice & Noodles) ──
  {
    name: 'Mains',
    icon: '🍜',
    items: [
      { id: 102, name: 'Fried Rice (Veg)',              description: 'Wok-tossed vegetable fried rice',          price: 149, image: 'https://source.unsplash.com/400x300/?vegetable-fried-rice&sig=102' },
      { id: 103, name: 'Fried Rice (Egg)',              description: 'Egg tossed with fried rice & soy',         price: 189, image: 'https://source.unsplash.com/400x300/?egg-fried-rice&sig=103' },
      { id: 104, name: 'Fried Rice (Non-Veg)',          description: 'Chicken & prawn wok-fried rice',           price: 239, image: 'https://source.unsplash.com/400x300/?chicken,fried-rice&sig=104' },
      { id: 105, name: 'Hakka Noodles (Veg)',           description: 'Wok-tossed veg Hakka noodles',             price: 99,  image: 'https://source.unsplash.com/400x300/?hakka,noodles&sig=105' },
      { id: 106, name: 'Hakka Noodles (Egg)',           description: 'Egg-tossed Hakka noodles',                 price: 99,  image: 'https://source.unsplash.com/400x300/?egg,noodles&sig=106' },
      { id: 107, name: 'Hakka Noodles (Non-Veg)',       description: 'Chicken Hakka noodles stir-fried',         price: 249, image: 'https://source.unsplash.com/400x300/?chicken-noodles&sig=107' },
      { id: 108, name: 'Chilli Garlic Noodles (Veg)',   description: 'Spicy garlic-infused veg noodles',         price: 119, image: 'https://source.unsplash.com/400x300/?garlic,noodles&sig=108' },
      { id: 109, name: 'Chilli Garlic Noodles (Egg)',   description: 'Egg chilli garlic wok noodles',            price: 119, image: 'https://source.unsplash.com/400x300/?chilli,noodles&sig=109' },
      { id: 110, name: 'Chilli Garlic Noodles (Non-Veg)',description: 'Chicken chilli garlic noodles',          price: 249, image: 'https://source.unsplash.com/400x300/?spicy,chicken-noodles&sig=110' },
      { id: 111, name: 'Szechuan Noodles (Veg)',        description: 'Fiery Szechuan-spiced veg noodles',        price: 199, image: 'https://source.unsplash.com/400x300/?szechuan,noodles&sig=111' },
      { id: 112, name: 'Szechuan Noodles (Egg)',        description: 'Egg-tossed Szechuan noodles',              price: 189, image: 'https://source.unsplash.com/400x300/?spicy,egg-noodles&sig=112' },
      { id: 113, name: 'Szechuan Noodles (Non-Veg)',    description: 'Chicken Szechuan noodles, spicy',          price: 269, image: 'https://source.unsplash.com/400x300/?szechuan-chicken&sig=113' }
    ]
  },

  // ── Momos ──
  {
    name: 'Momos',
    icon: '🥟',
    items: [
      { id: 114, name: 'Paneer Momos',          description: 'Steamed paneer-filled dumplings',        price: 189, image: 'https://source.unsplash.com/400x300/?dumpling,steamed&sig=114' },
      { id: 115, name: 'Veg Momos',             description: 'Soft steamed vegetable dumplings',       price: 189, image: 'https://source.unsplash.com/400x300/?veg,dumpling&sig=115' },
      { id: 116, name: 'Chicken Momos',         description: 'Juicy chicken steamed dumplings',        price: 199, image: 'https://source.unsplash.com/400x300/?chicken,dumpling&sig=116' },
      { id: 117, name: 'Kurkure Momos',         description: 'Deep-fried crispy veg kurkure momos',    price: 199, image: 'https://source.unsplash.com/400x300/?fried-dumpling&sig=117' },
      { id: 118, name: 'Kurkure Chicken Momos', description: 'Crunchy fried chicken kurkure momos',    price: 169, image: 'https://source.unsplash.com/400x300/?crispy-dumpling,chicken&sig=118' }
    ]
  },

  // ── Pasta ──
  {
    name: 'Pasta',
    icon: '🍝',
    items: [
      { id: 119, name: 'White Sauce Pasta',  description: 'Creamy Alfredo sauce penne pasta',     price: 149, image: 'https://source.unsplash.com/400x300/?white-sauce-pasta&sig=119' },
      { id: 120, name: 'Red Sauce Pasta',    description: 'Spicy Arrabiata tomato sauce penne',   price: 149, image: 'https://source.unsplash.com/400x300/?red-sauce,pasta&sig=120' },
      { id: 121, name: 'Pesto Pasta',        description: 'Fresh basil pesto tossed pasta',        price: 149, image: 'https://source.unsplash.com/400x300/?pesto,pasta&sig=121' },
      { id: 122, name: 'Spaghetti Aglio e Olio', description: 'Garlic olive oil classic spaghetti', price: 199, image: 'https://source.unsplash.com/400x300/?spaghetti,aglio&sig=122' }
    ]
  },

  // ── Pizza ──
  {
    name: 'Pizza',
    icon: '🍕',
    items: [
      { id: 123, name: 'Margherita Pizza',    description: 'Classic tomato base, mozzarella & basil',   price: 219, image: 'https://source.unsplash.com/400x300/?margherita-pizza&sig=123' },
      { id: 124, name: 'Veg Stagione Pizza',  description: 'Four seasons loaded veg pizza',             price: 259, image: 'https://source.unsplash.com/400x300/?vegetable-pizza&sig=124' },
      { id: 125, name: 'Chicken Fajita Pizza',description: 'Spiced chicken fajita on a pizza',          price: 299, image: 'https://source.unsplash.com/400x300/?chicken,pizza&sig=125' },
      { id: 126, name: 'Mushroom Pizza',      description: 'Fresh mushroom & cheese loaded pizza',       price: 269, image: 'https://source.unsplash.com/400x300/?mushroom-pizza&sig=126' },
      { id: 127, name: 'Sweet Corn Pizza',    description: 'Sweet corn & cheese pizza delight',          price: 269, image: 'https://source.unsplash.com/400x300/?corn,pizza&sig=127' }
    ]
  },

  // ── Salad ──
  {
    name: 'Salad',
    icon: '🥗',
    items: [
      { id: 128, name: 'Caesar Salad',              description: 'Romaine, croutons, parmesan & Caesar dressing', price: 199, image: 'https://source.unsplash.com/400x300/?caesar-salad&sig=128' },
      { id: 129, name: 'Creamy & Crunchy Salad',    description: 'Mixed greens with creamy crunchy toppings',     price: 199, image: 'https://source.unsplash.com/400x300/?green-salad,creamy&sig=129' },
      { id: 130, name: 'Mix Green Leaves',          description: 'Fresh garden greens lightly dressed',           price: 199, image: 'https://source.unsplash.com/400x300/?green-leaves,salad&sig=130' },
      { id: 131, name: 'Mix Green with Balsamic',   description: 'Garden greens with balsamic vinaigrette',       price: 199, image: 'https://source.unsplash.com/400x300/?balsamic,salad&sig=131' },
      { id: 132, name: 'Mix Fruit Salad',           description: 'Seasonal fresh fruit salad bowl',               price: 199, image: 'https://source.unsplash.com/400x300/?fruit-salad&sig=132' }
    ]
  },

  // ── Sandwich & Burger ──
  {
    name: 'Sandwich & Burger',
    icon: '🍔',
    items: [
      { id: 133, name: 'Plain Sandwich',           description: 'Classic veg plain sandwich',               price: 99,  image: 'https://source.unsplash.com/400x300/?sandwich&sig=133' },
      { id: 134, name: 'Veg Burger Lite',          description: 'Light & fresh veg patty burger',           price: 59,  image: 'https://source.unsplash.com/400x300/?veggie-burger&sig=134' },
      { id: 135, name: 'Veg Burger Classic',       description: 'Loaded classic veg burger with sauce',     price: 159, image: 'https://source.unsplash.com/400x300/?vegetarian-burger&sig=135' },
      { id: 136, name: 'Chicken Burger',           description: 'Crispy chicken fillet burger',             price: 199, image: 'https://source.unsplash.com/400x300/?chicken-burger&sig=136' },
      { id: 137, name: 'Paneer Loaded Sandwich',   description: 'Grilled paneer loaded club sandwich',      price: 199, image: 'https://source.unsplash.com/400x300/?paneer,sandwich&sig=137' },
      { id: 138, name: 'Veg Club Sandwich',        description: 'Triple-decker classic veg club',           price: 199, image: 'https://source.unsplash.com/400x300/?club-sandwich,veg&sig=138' },
      { id: 139, name: 'Chicken Club Sandwich',    description: 'Grilled chicken triple-decker club',       price: 199, image: 'https://source.unsplash.com/400x300/?chicken-sandwich&sig=139' },
      { id: 140, name: 'Garlic Bread',             description: 'Toasted garlic herb butter bread',         price: 89,  image: 'https://source.unsplash.com/400x300/?garlic-bread&sig=140' },
      { id: 141, name: 'Cheese Garlic Bread',      description: 'Garlic bread topped with melted cheese',   price: 99,  image: 'https://source.unsplash.com/400x300/?cheese-garlic-bread&sig=141' },
      { id: 142, name: 'American Corn Special',    description: 'Loaded American corn sandwich special',    price: 199, image: 'https://source.unsplash.com/400x300/?corn,sandwich&sig=142' }
    ]
  },

  // ── Signature Rice Bowls ──
  {
    name: 'Rice Bowls',
    icon: '🍚',
    items: [
      { id: 143, name: 'Grilled Chicken Rice Bowl', description: 'Herb-grilled chicken over seasoned rice', price: 399, image: 'https://source.unsplash.com/400x300/?grilled-chicken,rice-bowl&sig=143' },
      { id: 144, name: 'Fish Rice Bowl',             description: 'Pan-seared fish over flavoured rice',     price: 399, image: 'https://source.unsplash.com/400x300/?fish,rice-bowl&sig=144' },
      { id: 145, name: 'Cottage Cheese Bowl',        description: 'Paneer & veggies over fragrant rice',     price: 349, image: 'https://source.unsplash.com/400x300/?paneer,rice-bowl&sig=145' }
    ]
  },

  // ── Soups ──
  {
    name: 'Soups',
    icon: '🍲',
    items: [
      { id: 146, name: 'Hot & Sour Soup',      description: 'Classic tangy spicy Indo-Chinese soup',   price: 199, image: 'https://source.unsplash.com/400x300/?hot-sour-soup&sig=146' },
      { id: 147, name: 'Veg Manchow Soup',     description: 'Crispy noodle topped veg Manchow',        price: 149, image: 'https://source.unsplash.com/400x300/?noodle,soup&sig=147' },
      { id: 148, name: 'Sweet Corn Soup',      description: 'Creamy sweet corn soup',                  price: 149, image: 'https://source.unsplash.com/400x300/?corn-soup&sig=148' },
      { id: 149, name: 'Broccoli Spinach Soup',description: 'Healthy blended broccoli spinach soup',   price: 170, image: 'https://source.unsplash.com/400x300/?broccoli,soup&sig=149' }
    ]
  },

  // ── Omelette ──
  {
    name: 'Omelette',
    icon: '🍳',
    items: [
      { id: 150, name: 'Triple Cheese Omelette',    description: 'Three-cheese stuffed fluffy omelette',    price: 120, image: 'https://source.unsplash.com/400x300/?cheese-omelette&sig=150' },
      { id: 151, name: 'Greek Omelette',            description: 'Feta, olives & herbs Greek style',        price: 140, image: 'https://source.unsplash.com/400x300/?greek-omelette&sig=151' },
      { id: 152, name: 'Poached Egg with Bread',    description: 'Perfect poached eggs on toasted bread',   price: 120, image: 'https://source.unsplash.com/400x300/?poached-egg&sig=152' },
      { id: 153, name: 'Scrambled Omelette',        description: 'Fluffy scrambled eggs with toast',        price: 130, image: 'https://source.unsplash.com/400x300/?scrambled-eggs&sig=153' },
      { id: 154, name: 'Sunny Side Up with Toast',  description: 'Classic sunny side up with buttered toast', price: 150, image: 'https://source.unsplash.com/400x300/?sunny-side-up&sig=154' }
    ]
  },

  // ── Maggi ──
  {
    name: 'Maggi',
    icon: '🍜',
    items: [
      { id: 155, name: 'Plain Maggi',      description: 'Classic Maggi cooked to perfection',     price: 99,  image: 'https://source.unsplash.com/400x300/?instant-noodles&sig=155' },
      { id: 156, name: 'Masala Maggi',     description: 'Spicy masala tossed Maggi noodles',      price: 125, image: 'https://source.unsplash.com/400x300/?spicy-noodles&sig=156' },
      { id: 157, name: 'Cheese Maggi',     description: 'Maggi smothered in melted cheese',        price: 129, image: 'https://source.unsplash.com/400x300/?cheesy-noodles&sig=157' },
      { id: 158, name: 'Vegetable Maggi',  description: 'Maggi loaded with fresh veggies',        price: 175, image: 'https://source.unsplash.com/400x300/?vegetable-noodles&sig=158' }
    ]
  },

  // ── Keema ──
  {
    name: 'Keema',
    icon: '🥘',
    items: [
      { id: 159, name: 'Keema Chicken Pao',   description: 'Spiced chicken keema with soft pao bun', price: 199, image: 'https://source.unsplash.com/400x300/?chicken-mince,bun&sig=159' },
      { id: 160, name: 'Keema Chicken Toast',  description: 'Spiced chicken mince on crispy toast',   price: 199, image: 'https://source.unsplash.com/400x300/?minced-chicken,toast&sig=160' }
    ]
  },

  // ── Pancakes ──
  {
    name: 'Pancakes',
    icon: '🥞',
    items: [
      { id: 161, name: 'Blue Berry Pancake', description: 'Fluffy pancakes with fresh blueberries',   price: 159, image: 'https://source.unsplash.com/400x300/?blueberry-pancake&sig=161' },
      { id: 162, name: 'Nutella Pancake',    description: 'Soft pancakes drizzled with Nutella',      price: 159, image: 'https://source.unsplash.com/400x300/?nutella,pancake&sig=162' },
      { id: 163, name: 'Biscoff Pancake',    description: 'Pancakes with Lotus Biscoff spread',       price: 199, image: 'https://source.unsplash.com/400x300/?biscoff,pancake&sig=163' }
    ]
  },

  // ── Combos ──
  {
    name: 'Combos',
    icon: '🎁',
    items: [
      { id: 164, name: 'Veg Manchurian + Fried Rice',       description: 'Veg Manchurian (5 Pcs) + Veg Fried Rice',         price: 179, image: 'https://source.unsplash.com/400x300/?manchurian,fried-rice&sig=164' },
      { id: 165, name: 'Paneer Chilli + Fried Rice',        description: 'Paneer Chilli (4 Pcs) + Veg Fried Rice',          price: 189, image: 'https://source.unsplash.com/400x300/?paneer,rice&sig=165' },
      { id: 166, name: 'Chicken Chilli + Fried Rice',       description: 'Chicken Chilli (4 Pcs) + Fried Rice',             price: 210, image: 'https://source.unsplash.com/400x300/?chicken-chilli,rice&sig=166' },
      { id: 167, name: 'Chicken Manchurian + Chicken Rice', description: 'Chicken Manchurian (4 Pcs) + Chicken Fried Rice', price: 210, image: 'https://source.unsplash.com/400x300/?chicken,manchurian&sig=167' },
      { id: 168, name: 'Paneer Chilli + Veg Noodles',       description: 'Paneer Chilli (4 Pcs) + Veg Noodles',            price: 189, image: 'https://source.unsplash.com/400x300/?paneer,noodles&sig=168' },
      { id: 169, name: 'Chicken Chilli + Sezwan Noodles',   description: 'Chicken Chilli (4 Pcs) + Sezwan Noodles',        price: 210, image: 'https://source.unsplash.com/400x300/?spicy-chicken-noodles&sig=169' },
      { id: 170, name: 'French Fries + Virgin Mojito',      description: 'Crispy fries paired with fresh mojito',           price: 139, image: 'https://source.unsplash.com/400x300/?fries,mojito&sig=170' }
    ]
  }

];
