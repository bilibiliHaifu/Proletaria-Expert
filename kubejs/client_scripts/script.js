/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 103:
/***/ (() => {

onEvent('jei.information', function (event) {
  event.add('appliedenergistics2:charged_certus_quartz_crystal', ['将赛特斯石英水晶扔到雷击里可以制作充能赛特斯石英水晶。', 'You can easily create lightning by placing and lighting a Fulminating Grenades/Explosives']);
  event.add('betterendforge:glowing_bulb', ['Found growing in the Blossoming Spires in The End']);
  event.add('atum:emmer_flour', ['组合（右键）水将其转换为粗麦面团']);
  event.add('minecraft:ender_eye', ['§5§lReputation:§r 23', '§5Signs:§r Wicked, Mind, Soul, Mind', '§3Items:', ' Ender Pearl', ' Blaze Powder', ' Obsidian Dust', ' Soul Shard']);
  event.add('minecraft:ender_eye', ['Toss items on the ground and chant the signs.', 'Reduces your §5§lReputation§r by 3.']);
  event.add('eidolon:unholy_symbol', ['§5§lReputation:§r 4', '§5Signs:§r Wicked, Soul, Wicked, Soul', '§3Items:', ' Pewter Inlay']);
  event.add('eidolon:unholy_symbol', ['Toss items on the ground and chant the signs.']);
  event.add('astralsorcery:celestial_crystal', ['Toss Rock Crystal and Stardust into Liquid Starlight']);
  event.add('astralsorcery:rock_crystal', ['Obtained from breaking Rock Crystal Ore.']);
  event.add('astralsorcery:attuned_celestial_crystal', ['Attune Celestial Crystal using the Attunement Altar.', 'Consult the Astral Tome on how to build the Attunement Altar.']);
  event.add('astralsorcery:attuned_rock_crystal', ['Attune Rock Crystal using the Attunement Altar.', 'Consult the Astral Tome on how to build the Attunement Altar.']);
  event.add('astralsorcery:perk_gem_day', ['Toss Rock Crystal and Illumination Powder into Liquid Starlight to spawn a gem.', 'It will convert into Ilium Dynamism Gem during the middle of the day, once fully grown.']);
  event.add('astralsorcery:perk_gem_night', ['Toss Rock Crystal and Illumination Powder into Liquid Starlight to spawn a gem.', 'It will convert into Fengarum Dynamism Gem during the middle of the night, once fully grown.']);
  event.add('astralsorcery:perk_gem_sky', ['Toss Rock Crystal and Illumination Powder into Liquid Starlight to spawn a gem.', 'It will convert into Ourium Dynamism Gem during dawn or dusk, once fully grown.']);
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

// EXTERNAL MODULE: ./lib/client/jei/info.js
var info = __webpack_require__(103);
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

;// CONCATENATED MODULE: ./lib/client/tooltips.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



onEvent('item.tooltip', function (event) {
  var _iterator = _createForOfIteratorHelper(tools),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;

      if (entry instanceof Tool) {
        tooltip(event, entry);
        continue;
      }

      for (var toolKey in entry.tools) {
        var tool = entry.tools[toolKey];
        tooltip(event, tool);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  event.addAdvanced('thermal:lumium_glass', function (item, advanced, text) {
    text.add(1, Text.red('耐凋灵'));
  });
  event.addAdvanced('thermal:enderium_glass', function (item, advanced, text) {
    text.add(1, Text.red('耐凋灵'));
  });
  event.addAdvanced('astralsorcery:starmetal', function (item, advanced, text) {
    text.add(1, Text.red('耐凋灵'));
  });
  event.addAdvanced('patchouli:guide_book', function (item, advanced, text) {
    if (item.nbt['patchouli:book'] == 'patchouli:proletaria') {
      text.add(1, Text.gold('Proletaria 信息小册子'));
    }
  });
  event.addAdvanced('eidolon:codex', function (item, adv, text) {
    text.add(3, '部分配方已改变，请使用JEI查询准确的配方');
  });
});

function tooltip(event, tool) {
  event.addAdvanced(tool.id, function (item, advanced, text) {
    text.add(1, Text.red('此工具已禁用，仅供合成'));
    text.add(2, Text.yellow('请使用匠魂工具替代'));
  });
}
;// CONCATENATED MODULE: ./modules/client.js


})();

/******/ })()
;