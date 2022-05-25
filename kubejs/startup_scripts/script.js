/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 596:
/***/ (() => {

onEvent('block.modification', function (event) {
  event.modify('minecraft:iron_ore', function (block) {
    block.explosionResistance = 1200.69;
  });
  event.modify('minecraft:iron_block', function (block) {
    block.explosionResistance = 1200.69;
  });
  event.modify('minecraft:gold_block', function (block) {
    block.explosionResistance = 1200.69;
  });
  event.modify('thermal:lumium_glass', function (block) {
    block.explosionResistance = 9999.99;
  });
  event.modify('thermal:enderium_glass', function (block) {
    block.explosionResistance = 9999.99;
  });
  event.modify('astralsorcery:starmetal', function (block) {
    block.explosionResistance = 9999.99;
  });
});

/***/ }),

/***/ 714:
/***/ (() => {

onEvent('item.registry', function (event) {
  console.log("Registering Foods!");
  event.create('ender_sushi').unstackable().food(function (food) {
    food.hunger(20);
    food.saturation(20);
    food.alwaysEdible();
    food.eaten(function (e) {
      if (!e.player.stages.has('end_access')) {
        e.player.stages.add('end_access');
        e.player.tell(text.green("您已解锁前往末地的权限"));
      }
    });
  }).tooltip(text.translate('item.kubejs.ender_sushi.tooltip')).glow(true);
  event.create('fiery_snack').unstackable().food(function (food) {
    food.hunger(20);
    food.saturation(20);
    food.alwaysEdible();
    food.eaten(function (e) {
      if (!e.player.stages.has('nether_access')) {
        e.player.stages.add('nether_access');
        e.player.tell(text.green("您已解锁进入下界的权限"));
      }
    });
  }).tooltip(text.translate('item.kubejs.fiery_snack.tooltip'));
});

/***/ }),

/***/ 6:
/***/ (() => {

// priority: 0
console.info('Registering TConstruct items');
onEvent('item.registry', function (event) {
  event.create('bucket_cast');
  event.create('bucket_sand_cast');
  event.create('bucket_red_sand_cast');
});

/***/ }),

/***/ 102:
/***/ (() => {

onEvent('item.modification', function (event) {
  event.modify('appliedenergistics2:certus_quartz_crystal', function (item) {
    item.fireResistant = true;
  });
  event.modify('appliedenergistics2:charged_certus_quartz_crystal', function (item) {
    item.fireResistant = true;
  });
  event.modify('kubejs:mystical_coal_block', function (item) {
    item.burnTime = 57600;
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./lib/common/mods.js
var Minecraft = 'minecraft';
var EE = 'emendatusenigmatica';
var Botania = 'botania';
var IE = 'immersiveengineering';
var CreateStuff = 'create_stuff_additions';
var CreateAddition = 'createaddition';
var Create = 'create';
var Atum = 'atum';
var AE2 = 'appliedenergistics2';
var BYG = 'byg';
var Occultism = 'occultism';
var Thermal = 'thermal';
var TCon = 'tconstruct';
var MM = 'masterfulmachinery';
var Titanium = 'titanium';
var IF = 'industrialforegoing';
var KubeJS = 'kubejs';
var BetterEnd = 'betterendforge';
var AS = 'astralsorcery';

;// CONCATENATED MODULE: ./lib/common/types/metal.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Metal = /*#__PURE__*/function () {
  function Metal(modid, name) {
    _classCallCheck(this, Metal);

    this.baseModId = modid;
    this.name = name;
    this.oreTag = "forge:ores/".concat(name);
    this.ingotTag = "forge:ingots/".concat(name);
    this.blockTag = "forge:storage_blocks/".concat(name);
    this.plateTag = "forge:plates/".concat(name);
    this.fluidTag = "forge:molten_".concat(name);
  }

  _createClass(Metal, [{
    key: "isOre",
    value: function isOre() {
      return !(this instanceof Alloy);
    }
  }, {
    key: "named",
    value: function named(modid, type, reverse) {
      modid = modid || this.baseModId;

      if (reverse) {
        return "".concat(modid, ":").concat(type, "_").concat(this.name);
      }

      return "".concat(modid, ":").concat(this.name, "_").concat(type);
    }
  }, {
    key: "ingot",
    value: function ingot(modid, reverse) {
      return this.named(modid, 'ingot', reverse);
    }
  }, {
    key: "nugget",
    value: function nugget(modid, reverse) {
      return this.named(modid, 'nugget', reverse);
    }
  }, {
    key: "plate",
    value: function plate(modid, reverse) {
      return this.named(modid, 'plate', reverse);
    }
  }, {
    key: "gear",
    value: function gear(modid, reverse) {
      return this.named(modid, 'gear', reverse);
    }
  }, {
    key: "rod",
    value: function rod(modid, reverse) {
      return this.named(modid, 'rod', reverse);
    }
  }, {
    key: "dust",
    value: function dust(modid, reverse) {
      return this.named(modid, 'dust', reverse);
    }
  }]);

  return Metal;
}();



var Alloy = /*#__PURE__*/function (_Metal) {
  _inherits(Alloy, _Metal);

  var _super = _createSuper(Alloy);

  function Alloy() {
    _classCallCheck(this, Alloy);

    return _super.apply(this, arguments);
  }

  return Alloy;
}(Metal);


;// CONCATENATED MODULE: ./lib/common/types/tool.js
function tool_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tool_typeof = function _typeof(obj) { return typeof obj; }; } else { tool_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tool_typeof(obj); }

function tool_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tool_setPrototypeOf(subClass, superClass); }

function tool_setPrototypeOf(o, p) { tool_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tool_setPrototypeOf(o, p); }

function tool_createSuper(Derived) { var hasNativeReflectConstruct = tool_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tool_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tool_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tool_possibleConstructorReturn(this, result); }; }

function tool_possibleConstructorReturn(self, call) { if (call && (tool_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return tool_assertThisInitialized(self); }

function tool_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tool_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function tool_getPrototypeOf(o) { tool_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tool_getPrototypeOf(o); }

function tool_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = function Tool(id) {
  tool_classCallCheck(this, Tool);

  this.id = id;
};

var ToolList = function ToolList(modid, material, reverse) {
  tool_classCallCheck(this, ToolList);

  this.tools = {
    pickaxe: new Pickaxe("".concat(modid, ":").concat(reverse ? "pickaxe_".concat(material) : "".concat(material, "_pickaxe"))),
    axe: new Axe("".concat(modid, ":").concat(reverse ? "axe_".concat(material) : "".concat(material, "_axe"))),
    shovel: new Shovel("".concat(modid, ":").concat(reverse ? "shovel_".concat(material) : "".concat(material, "_shovel"))),
    hoe: new Hoe("".concat(modid, ":").concat(reverse ? "hoe_".concat(material) : "".concat(material, "_hoe"))),
    sword: new Sword("".concat(modid, ":").concat(reverse ? "sword_".concat(material) : "".concat(material, "_sword")))
  };
};

var Pickaxe = /*#__PURE__*/function (_Tool) {
  tool_inherits(Pickaxe, _Tool);

  var _super = tool_createSuper(Pickaxe);

  function Pickaxe() {
    tool_classCallCheck(this, Pickaxe);

    return _super.apply(this, arguments);
  }

  return Pickaxe;
}(Tool);

var Axe = /*#__PURE__*/function (_Tool2) {
  tool_inherits(Axe, _Tool2);

  var _super2 = tool_createSuper(Axe);

  function Axe() {
    tool_classCallCheck(this, Axe);

    return _super2.apply(this, arguments);
  }

  return Axe;
}(Tool);

var Shovel = /*#__PURE__*/function (_Tool3) {
  tool_inherits(Shovel, _Tool3);

  var _super3 = tool_createSuper(Shovel);

  function Shovel() {
    tool_classCallCheck(this, Shovel);

    return _super3.apply(this, arguments);
  }

  return Shovel;
}(Tool);

var Hoe = /*#__PURE__*/function (_Tool4) {
  tool_inherits(Hoe, _Tool4);

  var _super4 = tool_createSuper(Hoe);

  function Hoe() {
    tool_classCallCheck(this, Hoe);

    return _super4.apply(this, arguments);
  }

  return Hoe;
}(Tool);

var Sword = /*#__PURE__*/function (_Tool5) {
  tool_inherits(Sword, _Tool5);

  var _super5 = tool_createSuper(Sword);

  function Sword() {
    tool_classCallCheck(this, Sword);

    return _super5.apply(this, arguments);
  }

  return Sword;
}(Tool);


;// CONCATENATED MODULE: ./lib/common/types/wood.js
function wood_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wood = function Wood(modid, name, isStem, overrides) {
  wood_classCallCheck(this, Wood);

  this.name = name;
  this.logsTag = "".concat(modid, ":").concat(name, "_").concat(isStem ? 'stems' : 'logs');
  this.planks = "".concat(modid, ":").concat(name, "_planks");

  if (overrides) {
    this.logsTag = overrides.logsTag || this.logsTag;
    this.planks = overrides.planks || this.planks;
  }
};


;// CONCATENATED MODULE: ./lib/common/lists.js




var metals = [new Metal(Minecraft, 'iron'), new Metal(Minecraft, 'gold'), new Metal(EE, 'copper'), new Metal(EE, 'zinc'), new Metal(EE, 'silver'), new Metal(EE, 'tin'), new Metal(EE, 'lead'), new Metal(EE, 'nickel'), new Metal(EE, 'uranium'), new Metal(EE, 'osmium'), new Metal(EE, 'cobalt'), new Metal(EE, 'aluminum'), new Alloy(EE, 'brass'), new Alloy(EE, 'steel'), new Alloy(EE, 'constantan'), new Alloy(EE, 'electrum'), new Alloy(EE, 'invar'), new Alloy(EE, 'bronze'), new Alloy(EE, 'signalum'), new Alloy(EE, 'lumium'), new Alloy(EE, 'enderium')];
var tools = [new ToolList(Minecraft, 'wooden'), new ToolList(Minecraft, 'stone'), new ToolList(Minecraft, 'golden'), new ToolList(Minecraft, 'iron'), new ToolList(Minecraft, 'diamond'), new ToolList(Minecraft, 'netherite'), new ToolList(Botania, 'manasteel'), new Pickaxe("".concat(Botania, ":manasteel_pick")), new ToolList(Botania, 'elementium'), new Pickaxe("".concat(Botania, ":glass_pickaxe")), new ToolList(CreateStuff, 'brass'), new ToolList(CreateStuff, 'zinc'), new ToolList(CreateStuff, 'copper'), new ToolList(CreateStuff, 'blazing'), new ToolList(CreateStuff, 'rose_quartz'), new ToolList(CreateStuff, 'shadow_steel'), new ToolList(IE, 'steel', true), new ToolList(AE2, 'certus_quartz'), new ToolList(AE2, 'nether_quartz'), new ToolList(BYG, 'pendorite'), new ToolList(Atum, 'limestone'), new ToolList(Occultism, 'iesnium'), new Axe("".concat(BYG, ":pendorite_battleaxe"))];
var woods = [new Wood(Minecraft, 'oak'), new Wood(Minecraft, 'dark_oak'), new Wood(Minecraft, 'birch'), new Wood(Minecraft, 'spruce'), new Wood(Minecraft, 'acacia'), new Wood(Minecraft, 'jungle'), new Wood(Minecraft, 'crimson', true), new Wood(Minecraft, 'warped', true), new Wood(Botania, 'livingwood', false, {
  logsTag: 'botania:livingwood'
}), new Wood(Botania, 'dreamwood', false, {
  logsTag: 'proletaria:dreamwood'
}), new Wood(TCon, 'greenheart'), new Wood(TCon, 'skyroot'), new Wood(TCon, 'bloodshroom'), new Wood(BYG, 'aspen'), new Wood(BYG, 'baobab'), new Wood(BYG, 'blue_enchanted'), new Wood(BYG, 'bulbis', true), new Wood(BYG, 'cherry'), new Wood(BYG, 'cika'), new Wood(BYG, 'cypress'), new Wood(BYG, 'ebony'), new Wood(BYG, 'ether'), new Wood(BYG, 'fir'), new Wood(BYG, 'green_enchanted'), new Wood(BYG, 'holly'), new Wood(BYG, 'imparius', true), new Wood(BYG, 'jacaranda'), new Wood(BYG, 'lament'), new Wood(BYG, 'mahogany'), new Wood(BYG, 'mangrove'), new Wood(BYG, 'maple'), new Wood(BYG, 'nightshade'), new Wood(BYG, 'palm'), new Wood(BYG, 'palo_verde', false, {
  planks: 'minecraft:birch_planks'
}), new Wood(BYG, 'pine'), new Wood(BYG, 'rainbow_eucalyptus'), new Wood(BYG, 'redwood'), new Wood(BYG, 'skyris'), new Wood(BYG, 'willow'), new Wood(BYG, 'witch_hazel'), new Wood(BYG, 'zelkova'), new Wood(BYG, 'sythian', true), new Wood(BYG, 'embur', false, {
  logsTag: 'byg:embur_pedus'
}), new Wood(Atum, 'palm', false, {
  logsTag: 'forge:palm_logs'
}), new Wood(Atum, 'deadwood', false, {
  logsTag: 'forge:deadwood_logs'
}), new Wood(KubeJS, 'mysticwood', false, {
  logsTag: 'kubejs:mysticwood'
}), new Wood(BetterEnd, 'mossy_glowshroom'), new Wood(BetterEnd, 'lacugrove'), new Wood(BetterEnd, 'end_lotus'), new Wood(BetterEnd, 'pythadendron'), new Wood(BetterEnd, 'dragon_tree'), new Wood(BetterEnd, 'tenanea'), new Wood(BetterEnd, 'helix_tree'), new Wood(BetterEnd, 'umbrella_tree'), new Wood(BetterEnd, 'jellyshroom'), new Wood(BetterEnd, 'lucernia')];
var lists_packages = {
  armorer_package: [],
  butcher_package: [],
  cartographer_package: [],
  cleric_package: [],
  electrician_package: [],
  engineer_package: [],
  farmer_package: [],
  fisherman_package: [],
  fletcher_package: [],
  gunsmith_package: [],
  leatherworker_package: [],
  librarian_package: [],
  machinist_package: [],
  mason_package: [],
  mechanic_package: [],
  outfitter_package: [],
  shepherd_package: [],
  toolsmith_package: [],
  weaponsmith_package: []
};

;// CONCATENATED MODULE: ./lib/startup/content/helper.js
function createBlocks(event, name, types, build) {
  types.forEach(function (type) {
    if (type === 'basic') {
      build(event.create(name));
    } else {
      build(event.create("".concat(name, "_").concat(type)).type(type).waterlogged());
    }
  });
}


;// CONCATENATED MODULE: ./lib/startup/content/misc.js
// priority: 0


console.info('Registering items');
onEvent('item.registry', function (event) {
  event.create('botanists_clay_ball').tooltip(text.translate('item.kubejs.botanists_clay_ball.tooltip')); //.texture('kubejs:item/botanists_clay_ball');

  event.create('mystical_clay_ball').tooltip(text.translate('item.kubejs.mystical_clay_ball.tooltip')) //.texture('kubejs:item/mystical_clay_ball')
  .glow(true);
  event.create('pro_coin').tooltip(text.translate('item.kubejs.pro_coin.tooltip'));
  event.create('incomplete_redstone_servo');
  event.create('incomplete_fluid_encapsulator');
  event.create('incomplete_rf_coil');
  event.create('incomplete_heat_sink');
  event.create('incomplete_pneumatic_cylinder');
  event.create('incomplete_printed_circuit_board');
  event.create('incomplete_advanced_pcb');
  event.create('incomplete_augment_2');
  event.create('incomplete_linen_thread_from_flax');
  event.create('incomplete_linen_thread_from_scrap');

  for (var item in lists_packages) {//event.create(item)
  }

  event.create('hot_manyullyn_ingot');
  event.create('hot_queens_slime_ingot');
  event.create('hot_hepatizon_ingot');
  event.create('mysticwood_twig').tooltip(text.translate('item.kubejs.mysticwood_twig.tooltip'));
  event.create('orechid_petal');
  event.create('mystical_coal').burnTime(6400);
  event.create('rune_balance');
  event.create('empty_orb');
  event.create('blood_orb');
  event.create('dark_orb');
  event.create('artifact_coupon_1');
  event.create('artifact_coupon_2');
  event.create('artifact_coupon_3');
  event.create('artifact_coupon_4');
  event.create('backpack_coupon_1');
  event.create('backpack_coupon_2');
  event.create('backpack_coupon_3');
  event.create('backpack_coupon_4');
  event.create('compressed_sky_stone_rod');
  event.create('resistor');
  event.create('magical_ring');
});
onEvent('block.registry', function (event) {
  event.create('mysticwood').material('wood').hardness(0.5);
  createBlocks(event, 'mysticwood_planks', ['basic', 'stairs', 'slab', 'fence'], function (builder) {
    builder.material('wood').hardness(0.5);
  });
  createBlocks(event, 'mysticrock', ['basic', 'stairs', 'slab', 'wall'], function (builder) {
    builder.material('stone').hardness(0.5);
  });
  event.create('mysticrock_bricks').material('stone').hardness(0.5);
  event.create('chiseled_mysticrock_bricks').material('stone').hardness(0.5);
  event.create('cracked_mysticrock_bricks').material('stone').hardness(0.5);
  event.create('mossy_mysticrock_bricks').material('stone').hardness(0.5); // Treated Items End -----------------------------

  event.create('stone_casing').material('stone').hardness(0.5);
  event.create('zinc_casing').material('iron').hardness(1.0); // Casings End -----------------------------

  event.create('mechanists_alloy_block').material('iron').hardness(1.0).displayName('安山合金块');
  event.create('mystical_coal_block').material('stone').hardness(1.0).displayName('神秘煤炭块'); // Compressed blocks --------------------------------

  event.create('compressed_crafting_table').material('wood').hardness(1.0);
  event.create('compressed_smooth_sky_stone_block').material('stone').hardness(1.0);
  event.create('compressed_lapis_1x').material('stone').hardness(1.0).displayName('压缩青金石块').item(function (builder) {
    builder.tooltip(text.translate('block.kubejs.compressed_lapis_1x.tooltip'));
  });
  event.create('compressed_lapis_2x').material('stone').hardness(1.0).displayName('二重压缩青金石块').item(function (builder) {
    builder.tooltip(text.translate('block.kubejs.compressed_lapis_2x.tooltip'));
  }); // Other --------------------------------

  event.create('lapis_compressed_iron_block').material('iron').hardness(2.0).displayName('青金石灌注的压缩铁块');
});
onEvent('fluid.registry', function (event) {
  event.create('mystical_lubricant').textureThick(0x0f97d6).bucketColor(0x0f97d6);
});
// EXTERNAL MODULE: ./lib/startup/content/tconstruct.js
var tconstruct = __webpack_require__(6);
;// CONCATENATED MODULE: ./lib/startup/modify_tools.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



onEvent('item.modification', function (event) {
  var _iterator = _createForOfIteratorHelper(tools),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;

      if (entry instanceof Tool) {
        modify(event, entry);
        continue;
      }

      for (var toolKey in entry.tools) {
        var tool = entry.tools[toolKey];
        modify(event, tool);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

function modify(event, tool) {
  event.modify(tool.id, function (item) {
    item.maxDamage = 1;
  });
}
// EXTERNAL MODULE: ./lib/startup/block_modifications.js
var block_modifications = __webpack_require__(596);
// EXTERNAL MODULE: ./lib/startup/item_modifications.js
var item_modifications = __webpack_require__(102);
// EXTERNAL MODULE: ./lib/startup/content/food.js
var food = __webpack_require__(714);
;// CONCATENATED MODULE: ./modules/startup.js






})();

/******/ })()
;