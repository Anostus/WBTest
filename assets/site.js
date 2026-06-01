(function(){
  function norm(s){ return (s || '').toLowerCase(); }

  function bindSearchFilters(root){
    (root || document).querySelectorAll('input[type="search"][data-filter-target]').forEach(function(input){
      if (input.__wbBound) return;
      input.__wbBound = true;
      var selector = input.getAttribute('data-filter-target');
      var searchRoot = input.closest('.side-nav') || document;
      var items = Array.prototype.slice.call(searchRoot.querySelectorAll(selector));
      input.addEventListener('input', function(){
        var q = norm(input.value);
        items.forEach(function(item){
          item.style.display = !q || norm(item.textContent).indexOf(q) !== -1 ? '' : 'none';
        });
      });
    });
  }

  function siteRootPrefix(){
    var script = document.currentScript;
    if(!script){
      var scripts = document.getElementsByTagName('script');
      for(var i = scripts.length - 1; i >= 0; i--){
        var src = scripts[i].getAttribute('src') || '';
        if(src.indexOf('assets/site.js') !== -1){
          script = scripts[i];
          break;
        }
      }
    }
    var src = script ? (script.getAttribute('src') || '') : 'assets/site.js';
    return src.replace(/assets\/site\.js(?:\?.*)?$/, '');
  }

  function isLocalSitePath(value){
    return value &&
      value.charAt(0) !== '#' &&
      value.charAt(0) !== '/' &&
      !/^[a-z]+:/i.test(value);
  }

  function rewriteNavPaths(nav, prefix){
    nav.querySelectorAll('a[href], img[src]').forEach(function(el){
      var attr = el.hasAttribute('href') ? 'href' : 'src';
      var value = el.getAttribute(attr);
      if(isLocalSitePath(value)) el.setAttribute(attr, prefix + value);
    });
  }

  function comparablePath(url){
    return url.pathname.replace(/\/index\.html$/, '/');
  }

  function markCurrentNavItem(nav){
    var here = new URL(window.location.href);
    here.hash = '';
    here.search = '';
    var herePath = comparablePath(here);

    nav.querySelectorAll('li.active').forEach(function(li){ li.classList.remove('active'); });
    nav.querySelectorAll('a[href]').forEach(function(a){
      var there = new URL(a.getAttribute('href'), window.location.href);
      there.hash = '';
      there.search = '';
      if(comparablePath(there) === herePath){
        var li = a.closest('li');
        if(li) li.classList.add('active');
      }
    });
  }

  function loadSideNav(){
    var nav = document.querySelector('nav[data-include="side-nav"]');
    if(!nav) return;

    var prefix = siteRootPrefix();
    fetch(prefix + 'assets/side-nav.html')
      .then(function(response){
        if(!response.ok) throw new Error('Could not load side navigation');
        return response.text();
      })
      .then(function(html){
        nav.innerHTML = html;
        rewriteNavPaths(nav, prefix);
        markCurrentNavItem(nav);
        bindSearchFilters(nav);
      })
      .catch(function(){
        nav.innerHTML = '<div class="nav-title"><a href="' + prefix + 'index.html">White Box SRD</a></div><p>Navigation could not be loaded.</p>';
      });
  }

  bindSearchFilters(document);
  loadSideNav();

  var monsterFilter = document.querySelector('#monster-filter');
  var sourceCore = document.querySelector('#monster-source-core');
  var sourceConverted = document.querySelector('#monster-source-converted');
  var monsterHasImage = document.querySelector('#monster-has-image');
  var monsterSort = document.querySelector('#monster-sort');
  var monsterTbody = document.querySelector('#monster-index-body');
  var alphaNav = document.querySelector('.alpha-nav');
  if(monsterFilter){
    var rows = Array.prototype.slice.call(document.querySelectorAll('tr[data-monster-name]'));

    function rowName(row){ return row.getAttribute('data-name-sort') || norm(row.getAttribute('data-monster-name')); }
    function rowNumber(row, attr){
      var raw = row.getAttribute(attr);
      var value = parseFloat(raw);
      return isNaN(value) ? 99999 : value;
    }
    function letterFor(row){
      var name = rowName(row).replace(/^(the|a|an)\s+/, '');
      var ch = name.charAt(0).toUpperCase();
      return ch >= 'A' && ch <= 'Z' ? ch : '#';
    }
    function makeLetterRow(letter){
      var tr = document.createElement('tr');
      tr.className = 'letter-row';
      var th = document.createElement('th');
      th.colSpan = 4;
      th.id = letter;
      th.textContent = letter;
      tr.appendChild(th);
      return tr;
    }

    function rebuildMonsterRows(){
      if(!monsterTbody) return;
      var sortBy = monsterSort ? monsterSort.value : 'name';
      rows.sort(function(a, b){
        if(sortBy === 'hd') return rowNumber(a, 'data-hd-sort') - rowNumber(b, 'data-hd-sort') || rowName(a).localeCompare(rowName(b));
        if(sortBy === 'hde') return rowNumber(a, 'data-hde-sort') - rowNumber(b, 'data-hde-sort') || rowName(a).localeCompare(rowName(b));
        return rowName(a).localeCompare(rowName(b));
      });
      monsterTbody.innerHTML = '';
      if(sortBy === 'name'){
        var lastLetter = '';
        rows.forEach(function(row){
          var letter = letterFor(row);
          if(letter !== lastLetter){
            lastLetter = letter;
            monsterTbody.appendChild(makeLetterRow(letter));
          }
          monsterTbody.appendChild(row);
        });
        if(alphaNav) alphaNav.style.display = '';
      } else {
        rows.forEach(function(row){ monsterTbody.appendChild(row); });
        if(alphaNav) alphaNav.style.display = 'none';
      }
    }

    function updateLetterRows(){
      Array.prototype.slice.call(document.querySelectorAll('tr.letter-row')).forEach(function(letterRow){
        var visible = false;
        var node = letterRow.nextElementSibling;
        while(node && !node.classList.contains('letter-row')){
          if(node.matches && node.matches('tr[data-monster-name]') && node.style.display !== 'none'){
            visible = true;
            break;
          }
          node = node.nextElementSibling;
        }
        letterRow.style.display = visible ? '' : 'none';
      });
    }

    function applyMonsterFilters(){
      var q = norm(monsterFilter.value);
      var showCore = !sourceCore || sourceCore.checked;
      var showConverted = !sourceConverted || sourceConverted.checked;
      rows.forEach(function(row){
        var name = norm(row.getAttribute('data-monster-name'));
        var source = row.getAttribute('data-monster-source') || 'core';
        var sourceOK = (source === 'core' && showCore) || (source === 'converted' && showConverted);
        var textOK = !q || name.indexOf(q) !== -1;
        var imageOK = !monsterHasImage || !monsterHasImage.checked || row.getAttribute('data-monster-image') === 'true';
        row.style.display = sourceOK && textOK && imageOK ? '' : 'none';
      });
      updateLetterRows();
    }

    monsterFilter.addEventListener('input', applyMonsterFilters);
    if(sourceCore) sourceCore.addEventListener('change', applyMonsterFilters);
    if(sourceConverted) sourceConverted.addEventListener('change', applyMonsterFilters);
    if(monsterHasImage) monsterHasImage.addEventListener('change', applyMonsterFilters);
    if(monsterSort) monsterSort.addEventListener('change', function(){ rebuildMonsterRows(); applyMonsterFilters(); });
    rebuildMonsterRows();
    applyMonsterFilters();
  }

  // Automatic table rollers. Used by the Maze Rats tables and expanded monster encounter tables.
  function rollDie(){ return Math.floor(Math.random() * 6) + 1; }
  function rollNumber(sides){ return Math.floor(Math.random() * sides) + 1; }
  function rollSum(count, sides){
    var total = 0;
    for(var i = 0; i < count; i++) total += rollNumber(sides);
    return total;
  }
  function padRoll(value, width){ return String(value).padStart(width, '0'); }
  function cellText(cell){ return (cell ? cell.textContent : '').replace(/\s+/g, ' ').trim(); }
  function cellHTML(cell){ return (cell ? cell.innerHTML : '').replace(/\s+/g, ' ').trim(); }
  function parseRollNumber(raw, isRangeEnd){
    raw = (raw || '').trim();
    if(raw === '00' && isRangeEnd) return 100;
    if(raw === '00') return 100;
    return parseInt(raw, 10);
  }
  function rollMatches(label, value){
    label = (label || '').trim().replace(/\s+/g, ' ');
    var numericValue = typeof value === 'number' ? value : parseInt(value, 10);
    if(/^\d+$/.test(label) || label === '00') return parseRollNumber(label, false) === numericValue;
    var orLess = label.match(/^(\d+)\s+or\s+less$/i);
    if(orLess) return numericValue <= parseRollNumber(orLess[1], false);
    var orMore = label.match(/^(\d+)\s*(?:\+|or\s+more)$/i);
    if(orMore) return numericValue >= parseRollNumber(orMore[1], false);
    var range = label.match(/^(\d+|00)\s*[-–—]\s*(\d+|00)$/);
    if(range){
      var lo = parseRollNumber(range[1], false), hi = parseRollNumber(range[2], true);
      return numericValue >= lo && numericValue <= hi;
    }
    return label === String(value);
  }
  function findRowByRoll(table, value){
    var rows = Array.prototype.slice.call(table.querySelectorAll('tbody tr'));
    for(var i = 0; i < rows.length; i++){
      var first = rows[i].querySelector('td');
      if(first && rollMatches(cellText(first), value)) return rows[i];
    }
    return null;
  }
  function resultFromRow(row){
    if(!row) return '';
    var cells = Array.prototype.slice.call(row.querySelectorAll('td')).slice(1);
    return cells.map(cellHTML).filter(Boolean).join(' — ');
  }
  function formatRoll(value, type){
    if(type === 'd100' || type === 'd%') return value === 100 ? '00' : padRoll(value, 2);
    if(type === 'd1000') return padRoll(value, 3);
    return String(value);
  }
  function rollValueForType(type){
    if(type === '1d6' || type === 'd6') return rollDie();
    if(type === 'd4') return rollNumber(4);
    if(type === 'd8') return rollNumber(8);
    if(type === 'd10') return rollNumber(10);
    if(type === 'd12') return rollNumber(12);
    if(type === 'd20') return rollNumber(20);
    if(type === 'd60') return rollNumber(60);
    if(type === 'd100' || type === 'd%') return rollNumber(100);
    if(type === 'd1000') return rollNumber(1000);
    if(type === '2d6-sum') return rollSum(2, 6);
    if(type === '3d6-sum') return rollSum(3, 6);
    return null;
  }
  function rollLabelForType(type, value){
    if(type === '2d6-sum') return '2d6 = ' + value;
    if(type === '3d6-sum') return '3d6 = ' + value;
    return formatRoll(value, type);
  }
  function noResultMessage(value, type){
    return 'No listed result for roll ' + rollLabelForType(type, value) + '.';
  }
  function rollDiceExpression(expression){
    expression = (expression || '').trim().toLowerCase();
    var match = expression.match(/^(\d*)d(\d+)$/);
    if(!match) return null;
    var count = match[1] ? parseInt(match[1], 10) : 1;
    var sides = parseInt(match[2], 10);
    if(!count || !sides) return null;
    var rolls = [];
    var total = 0;
    for(var i = 0; i < count; i++){
      var roll = rollNumber(sides);
      rolls.push(roll);
      total += roll;
    }
    return { expression: count + 'd' + sides, rolls: rolls, total: total };
  }
  function formatDiceList(spec){
    var pieces = [];
    (spec || '').split(',').forEach(function(part){
      part = part.trim();
      if(!part) return;
      var label = '';
      var expression = part;
      var labeled = part.match(/^([^:]+):\s*(.+)$/);
      if(labeled){
        label = labeled[1].trim();
        expression = labeled[2].trim();
      }
      var result = rollDiceExpression(expression);
      if(!result) return;
      var detail = result.rolls.length > 1 ? result.rolls.join('+') + '=' + result.total : String(result.total);
      pieces.push((label ? label + ' ' : '') + result.expression + ' (' + detail + ')');
    });
    return 'Rolls: ' + (pieces.length ? pieces.join(', ') : 'No dice configured.');
  }
  function columnRollResult(table, type){
    var headers = Array.prototype.slice.call(table.querySelectorAll('thead th')).slice(1);
    var pieces = [];
    headers.forEach(function(header, index){
      var value = rollValueForType(type);
      var row = findRowByRoll(table, value);
      var cells = row ? Array.prototype.slice.call(row.querySelectorAll('td')) : [];
      var cell = cells[index + 1];
      var label = cellText(header) || ('Column ' + (index + 1));
      pieces.push(label + ' (roll ' + rollLabelForType(type, value) + '): ' + (cellHTML(cell) || 'No listed result'));
    });
    return pieces.join(' — ');
  }
  document.querySelectorAll('button[data-roll-table]').forEach(function(button){
    if(button.__wbRollBound) return;
    button.__wbRollBound = true;
    button.addEventListener('click', function(){
      var table = document.getElementById(button.getAttribute('data-roll-table'));
      if(!table) return;
      var type = button.getAttribute('data-roll-type') || table.getAttribute('data-roll-type') || '2d6';
      var method = button.getAttribute('data-roll-method') || table.getAttribute('data-roll-method') || '';
      var output = button.parentNode ? button.parentNode.querySelector('.roll-output') : null;
      var message = '';
      if(method === 'dice-list'){
        message = formatDiceList(button.getAttribute('data-roll-dice') || table.getAttribute('data-roll-dice') || type);
      } else if(type === 'spell-formula'){
        var d1 = rollDie(), d2 = rollDie();
        var row = findRowByRoll(table, d1);
        var cells = row ? Array.prototype.slice.call(row.querySelectorAll('td')) : [];
        var result = cellHTML(cells[d2 <= 3 ? 1 : 2]);
        message = 'Roll ' + d1 + ', ' + d2 + ': ' + (result || 'No listed result');
      } else if(table.getAttribute('data-roll-columns') === 'true'){
        message = columnRollResult(table, type);
      } else if(type === '2d6'){
        var a = rollDie(), b = rollDie();
        var key = String(a) + String(b);
        var row2 = findRowByRoll(table, key);
        message = 'Roll ' + a + ', ' + b + ' (' + key + '): ' + (resultFromRow(row2) || noResultMessage(key, type));
      } else {
        var value = rollValueForType(type) || rollDie();
        var row = findRowByRoll(table, value);
        message = 'Roll ' + rollLabelForType(type, value) + ': ' + (resultFromRow(row) || noResultMessage(value, type));
      }
      if(output) output.innerHTML = message;
    });
  });



  // Quick No. Appearing generator.
  var noappRoot = document.getElementById('quick-no-appearing-generator');
  if(noappRoot && !noappRoot.__wbNoAppBound){
    noappRoot.__wbNoAppBound = true;
    var roleSelect = document.getElementById('noapp-role');
    var threatSelect = document.getElementById('noapp-threat');
    var fallbackControl = noappRoot.querySelector('.noapp-fallback-control');
    var tagSelect = document.getElementById('noapp-tag');
    var dialSelect = document.getElementById('noapp-dial');
    var lairScaleSelect = document.getElementById('noapp-lair-scale');
    var outputCells = {
      dungeon: document.getElementById('noapp-dungeon'),
      wild: document.getElementById('noapp-wild'),
      lair: document.getElementById('noapp-lair')
    };
    var rollCells = {
      dungeon: document.getElementById('noapp-dungeon-roll'),
      wild: document.getElementById('noapp-wild-roll'),
      lair: document.getElementById('noapp-lair-roll')
    };
    var copyLine = document.getElementById('noapp-copy-line');
    var notes = document.getElementById('noapp-notes');
    var copyStatus = document.getElementById('noapp-copy-status');
    var presetInput = document.getElementById('noapp-preset-search');
    var presetList = document.getElementById('noapp-preset-options');
    var presetClear = document.getElementById('noapp-preset-clear');
    var presetSummary = document.getElementById('noapp-preset-summary');
    var presetDataEl = document.getElementById('noapp-preset-data');
    var presetData = [];
    var presetMap = {};
    if(presetDataEl){
      try { presetData = JSON.parse(presetDataEl.textContent || '[]'); } catch(e) { presetData = []; }
    }

    var roleData = {
      'apex-solo': { label:'Apex solo', dungeon:'1', wild:'1', lair:'1d3', note:'Use 1 for named or unique creatures; the lair result can represent mate, young, lieutenant, or thrall.' },
      'huge-brute': { label:'Huge brute', dungeon:'1d2', wild:'1d4', lair:'1d4+1', note:'If truly solitary, use the Solitary tag instead of the full lair value.' },
      'dangerous-pack': { label:'Dangerous pack', dungeon:'1d4', wild:'1d6', lair:'Wild', note:'For true pack hunters, the Pack dial bumps Wild and Lair one die step.' },
      'ordinary-predator': { label:'Ordinary beast (predator)', dungeon:'1d4', wild:'1d6', lair:'Wild', note:'Use Solitary for ambush or lone animals; true pack hunters may be Dangerous pack instead.' },
      'ordinary-prey': { label:'Ordinary beast (prey)', dungeon:'1d6', wild:'3d10', lair:'3d10', note:'Use Herd for grazing, flocking, or schooling animals; use Immense herd only for migrations or huge masses.' },
      'communal-humanoid': { label:'Communal humanoid', dungeon:'2d4', wild:'3d6', lair:'5d6', note:'Add 1 leader/champion per 10 and 1 caster/shaman per 20 if appropriate.' },
      'small-nuisances': { label:'Small nuisances', dungeon:'2d6', wild:'3d6', lair:'5d6', note:'Use Colony for hives, colonies, nests, roosts, or vermin warrens.' },
      'trap-monster': { label:'Trap monster', dungeon:'1', wild:'—', lair:'1d3', note:'Usually Placed, bound, territorial, or room-specific rather than wandering.' }
    };
    var fallbackData = {
      trivial: { label:'Trivial / 0–½ HD', dungeon:'2d6', wild:'3d6', lair:'5d6', note:'Fallback table: use large Lair numbers only for Social or Colony creatures; otherwise Lair = Wild.' },
      common: { label:'Common / 1–2 HD', dungeon:'1d6+1', wild:'2d6', lair:'4d6', note:'Fallback table: use large Lair numbers only for Social or Colony creatures; otherwise Lair = Wild.' },
      tough: { label:'Tough / 3–4 HD', dungeon:'1d4+1', wild:'1d6', lair:'1d6+1', note:'Fallback table: prefer the role table when ecology is obvious.' },
      strong: { label:'Strong / 5–6 HD', dungeon:'1d4', wild:'1d4+1', lair:'1d4+1', note:'Fallback table: prefer the role table when ecology is obvious.' },
      major: { label:'Major / 7–9 HD', dungeon:'1d2', wild:'1d4', lair:'1d4', note:'Fallback table: prefer the role table when ecology is obvious.' },
      apex: { label:'Apex / 10+ HD', dungeon:'1', wild:'1d3', lair:'1d3', note:'Fallback table: prefer the role table when ecology is obvious.' }
    };

    function selectHasValue(select, value){
      if(!select) return false;
      return Array.prototype.some.call(select.options, function(option){ return option.value === value; });
    }
    function setSelectValue(select, value){
      if(select && selectHasValue(select, value)) select.value = value;
    }
    function labelForSelect(select, value){
      if(!select) return value || '';
      for(var i = 0; i < select.options.length; i++){
        if(select.options[i].value === value) return select.options[i].textContent;
      }
      return value || '';
    }
    function populatePresetList(){
      presetMap = {};
      if(presetList){
        presetList.innerHTML = '';
        var noneOption = document.createElement('option');
        noneOption.value = 'None';
        presetList.appendChild(noneOption);
      }
      presetData.forEach(function(preset){
        if(!preset || !preset.name) return;
        presetMap[preset.name] = preset;
        if(presetList){
          var option = document.createElement('option');
          option.value = preset.name;
          presetList.appendChild(option);
        }
      });
    }
    function describePreset(preset){
      if(!preset) return 'Preset: None. Type a monster name to populate Role, Tag, Context Dial, and Lair Special automatically.';
      var parts = ['Preset applied: ' + preset.name];
      parts.push('Role ' + labelForSelect(roleSelect, preset.role));
      if(preset.role === 'no-role') parts.push('Fallback ' + labelForSelect(threatSelect, preset.threat));
      parts.push('Tag ' + labelForSelect(tagSelect, preset.tag));
      parts.push('Context ' + labelForSelect(dialSelect, preset.dial));
      parts.push('Lair special ' + labelForSelect(lairScaleSelect, preset.lairScale));
      return parts.join(' · ') + '.';
    }
    function applyPreset(name){
      var presetName = (name || '').trim();
      if(!presetName || presetName === 'None'){
        if(presetInput) presetInput.value = 'None';
        if(presetSummary) presetSummary.textContent = describePreset(null);
        renderNoApp();
        return;
      }
      var preset = presetMap[presetName];
      if(!preset){
        if(presetSummary) presetSummary.textContent = 'Type to search, then choose an exact monster preset from the list.';
        return;
      }
      setSelectValue(roleSelect, preset.role || 'apex-solo');
      setSelectValue(threatSelect, preset.threat || 'common');
      setSelectValue(tagSelect, preset.tag || 'role-default');
      setSelectValue(dialSelect, preset.dial || 'none');
      setSelectValue(lairScaleSelect, preset.lairScale || 'normal');
      if(presetInput) presetInput.value = preset.name;
      renderNoApp();
      if(presetSummary) presetSummary.textContent = describePreset(preset);
    }

    function resolveWild(expr, wild){ return expr === 'Wild' ? wild : expr; }
    function addNote(list, text){ if(text && list.indexOf(text) === -1) list.push(text); }
    function bumpDieStep(expr){
      if(!expr || expr === '—') return expr;
      return expr.replace(/(\d*)d(4|6|8)(?!\d)/, function(match, qty, sides){
        var next = sides === '4' ? '6' : sides === '6' ? '8' : '10';
        return (qty || '1') + 'd' + next;
      });
    }
    function halveExpr(expr){
      if(!expr || expr === '—') return expr;
      if(expr === '1') return '1';
      return expr + ', halved (min. 1)';
    }
    function warbandExpr(expr){
      if(!expr || expr === '—') return expr;
      return expr.replace(/(\d*)d(\d+)(?!\d)/, function(match, qty, sides){
        var count = parseInt(qty || '1', 10);
        var added = Math.max(1, Math.floor(count / 2));
        return String(count + added) + 'd' + sides;
      });
    }
    function formulaFromSelections(){
      var roleKey = roleSelect ? roleSelect.value : 'apex-solo';
      var useFallback = roleKey === 'no-role';
      var base = useFallback ? fallbackData[threatSelect ? threatSelect.value : 'trivial'] : roleData[roleKey];
      var tag = tagSelect ? tagSelect.value : 'role-default';
      var dial = dialSelect ? dialSelect.value : 'none';
      var lairScale = lairScaleSelect ? lairScaleSelect.value : 'normal';
      var result = {
        dungeon: base.dungeon,
        wild: base.wild,
        lair: resolveWild(base.lair, base.wild),
        notes: []
      };
      addNote(result.notes, (useFallback ? 'Using No Role fallback: ' + base.label + '.' : 'Using role: ' + base.label + '.'));
      addNote(result.notes, base.note);

      if(tag === 'solitary'){
        result.dungeon = halveExpr(result.dungeon);
        result.wild = halveExpr(result.wild);
        result.lair = result.wild;
        addNote(result.notes, 'Solitary halves the result, minimum 1; Lair uses the Wild value after halving.');
      } else if(tag === 'social'){
        result.lair = resolveWild(base.lair, base.wild);
        addNote(result.notes, 'Social uses the printed Lair value; add leaders or specialists when appropriate.');
      } else if(tag === 'colony'){
        result.lair = '5d10';
        addNote(result.notes, 'Colony uses 5d10 in the lair for hives, nests, rookeries, or vermin warrens.');
      } else if(tag === 'herd'){
        result.lair = lairScale === 'immense-herd' ? '10d10' : '3d10';
        addNote(result.notes, lairScale === 'immense-herd' ? 'Immense herd/migration uses 10d10 for Lair.' : 'Herd uses 3d10 for ordinary herd, flock, or school lair counts.');
      } else if(tag === 'placed'){
        result.dungeon = '1';
        result.wild = '—';
        result.lair = lairScale === 'several-placed' ? '1d3' : '1';
        addNote(result.notes, lairScale === 'several-placed' ? 'Placed site with several guardians uses 1d3 for Lair.' : 'Placed uses 1 unless the site clearly has several guardians.');
      } else {
        addNote(result.notes, 'Role default uses the table values as written. To enforce the core lair rule, choose Solitary, Social, Colony, Herd, or Placed.');
      }

      if(lairScale === 'immense-herd' && tag !== 'herd'){
        result.lair = '10d10';
        addNote(result.notes, 'Lair special overrides Lair to 10d10 for an immense herd, migration, or mass.');
      }
      if(lairScale === 'several-placed' && tag !== 'placed'){
        addNote(result.notes, 'Several placed guardians only changes the Lair value when the Placed tag is selected.');
      }

      if(dial === 'pack'){
        result.wild = bumpDieStep(result.wild);
        result.lair = bumpDieStep(result.lair);
        addNote(result.notes, 'Pack bumps Wild and Lair one die step where the formula has a bumpable die.');
      } else if(dial === 'warband'){
        result.wild = warbandExpr(result.wild);
        result.lair = warbandExpr(result.lair);
        addNote(result.notes, 'Warband does not change Dungeon. For Wild and Lair, add half the number of dice to an XdY roll, rounded down, minimum +1 die.');
      } else if(dial === 'rare'){
        result.dungeon = '1 or 1d2';
        result.wild = '1 or 1d2';
        result.lair = '1 or 1d2';
        addNote(result.notes, 'Rare overrides the table: use 1 or 1d2 by referee choice.');
      }
      return result;
    }

    function renderNoApp(){
      if(fallbackControl) fallbackControl.hidden = !(roleSelect && roleSelect.value === 'no-role');
      var result = formulaFromSelections();
      ['dungeon','wild','lair'].forEach(function(key){
        if(outputCells[key]) outputCells[key].textContent = result[key];
        if(rollCells[key]) rollCells[key].textContent = '';
      });
      if(copyLine) copyLine.textContent = 'No. Appearing: Dungeon ' + result.dungeon + '; Wild ' + result.wild + '; Lair ' + result.lair;
      if(notes) notes.textContent = result.notes.join(' ');
      if(copyStatus) copyStatus.textContent = '';
    }

    function rollFormulaText(expr){
      if(!expr || expr === '—') return 'No ordinary roll';
      if(expr.indexOf('1 or 1d2') !== -1) return 'Referee choice: 1 or 1d2';
      var halved = expr.indexOf('halved') !== -1;
      var match = expr.match(/(\d*)d(\d+)(?:\s*([+\-])\s*(\d+))?/);
      var total = 0, detail = '';
      if(match){
        var count = parseInt(match[1] || '1', 10);
        var sides = parseInt(match[2], 10);
        var rolls = [];
        for(var i = 0; i < count; i++) rolls.push(rollNumber(sides));
        total = rolls.reduce(function(a, b){ return a + b; }, 0);
        if(match[3] && match[4]) total += (match[3] === '-' ? -1 : 1) * parseInt(match[4], 10);
        detail = rolls.length > 1 ? ' [' + rolls.join(', ') + ']' : '';
      } else if(/^\d+$/.test(expr.trim())){
        total = parseInt(expr.trim(), 10);
      } else {
        return 'Cannot auto-roll this formula';
      }
      if(halved) total = Math.max(1, Math.floor(total / 2));
      return String(total) + detail;
    }

    populatePresetList();
    if(presetInput){
      presetInput.addEventListener('change', function(){ applyPreset(presetInput.value); });
      presetInput.addEventListener('input', function(){
        var value = (presetInput.value || '').trim();
        if(value === 'None' || presetMap[value]) applyPreset(value);
        else if(presetSummary) presetSummary.textContent = value ? 'Type to search, then choose an exact monster preset from the list.' : 'Preset: None. Type a monster name to populate the controls.';
      });
    }
    if(presetClear){
      presetClear.addEventListener('click', function(){ applyPreset('None'); });
    }

    [roleSelect, threatSelect, tagSelect, dialSelect, lairScaleSelect].forEach(function(control){
      if(control) control.addEventListener('change', function(){
        renderNoApp();
        if(presetSummary && presetInput && presetInput.value && presetInput.value !== 'None') presetSummary.textContent = describePreset(presetMap[presetInput.value]) + ' Controls may be edited after applying a preset.';
      });
    });
    noappRoot.querySelectorAll('button[data-noapp-roll]').forEach(function(button){
      button.addEventListener('click', function(){
        var key = button.getAttribute('data-noapp-roll');
        var expr = outputCells[key] ? outputCells[key].textContent : '';
        if(rollCells[key]) rollCells[key].textContent = rollFormulaText(expr);
      });
    });
    var copyButton = document.getElementById('noapp-copy-button');
    if(copyButton){
      copyButton.addEventListener('click', function(){
        var text = copyLine ? copyLine.textContent : '';
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(text).then(function(){ if(copyStatus) copyStatus.textContent = 'Copied.'; }, function(){ if(copyStatus) copyStatus.textContent = 'Select and copy the line manually.'; });
        } else if(copyStatus) {
          copyStatus.textContent = 'Select and copy the line manually.';
        }
      });
    }
    renderNoApp();
  }


})();
