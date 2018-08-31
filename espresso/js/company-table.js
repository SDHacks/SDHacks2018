$(function(){
  $('.company-table').find('td').filter(function() {
    return $(this).index() === 0;
  }).sortElements(function(a, b) {
    if ($.text([a]) === $.text([b])) return 0;

    return $.text([a]) > $.text([b]) ? 1 : -1;
  }, function() {
    return this.parentNode;
  });

  var columnMap = {
    name: 1,
    industry: 2,
    position: 3,
    workAuth: 4
  };

  var activeFilters = {
    industry: "",
    position: "",
    workAuth: "",
    name: "",
  };

  var industryOptions = $('.industry-filter__options');
  var positionOptions = $('.position-filter__options');
  var workAuthOptions = $('.authorisation-filter__options');

  function createFilterOptions() {
    var uniqueIndustries = {};
    var uniquePositions = {};
    var uniqueWorkAuths = {};

    $('.company-table tr:not(:first-child)').each(function() {
      var industryElem = $('td:nth-child(' + columnMap.industry + ')', this);
      var positionElem = $('td:nth-child(' + columnMap.position + ')', this);
      var workAuthElem = $('td:nth-child(' + columnMap.workAuth + ')', this);

      var industries = industryElem.text().split(', ');
      var positions = positionElem.text().split(', ');
      var workAuths = workAuthElem.text().split(', ');
      
      industries.forEach(function(industry) {
        if (Object.keys(uniqueIndustries).indexOf(industry) === -1) {
          uniqueIndustries[industry] = 1;
        } else {
          uniqueIndustries[industry]++;
        }
      });

      positions.forEach(function(position) {
        if (Object.keys(uniquePositions).indexOf(position) === -1) {
          uniquePositions[position] = 1;
        } else {
          uniquePositions[position]++;
        }
      });

      workAuths.forEach(function(workAuth) {
        if (Object.keys(uniqueWorkAuths).indexOf(workAuth) === -1) {
          uniqueWorkAuths[workAuth] = 1;
        } else {
          uniqueWorkAuths[workAuth]++;
        }
      });
    });
    
    Object.keys(uniqueIndustries).forEach(function(industry) {
      var newOption = $('<button/>',
      {
        'html': industry + ' <span class="filter__badge badge badge-pill">' + uniqueIndustries[industry] + '</span>',
        'class': 'industry-filter__option filter__option dropdown-item',
        'data-filter': industry
      });
      industryOptions.append(newOption);
    });

    Object.keys(uniquePositions).forEach(function(position) {
      var newOption = $('<button/>',
      {
        'html': position + ' <span class="filter__badge badge badge-pill">' + uniquePositions[position] + '</span>',
        'class': 'position-filter__option filter__option dropdown-item',
        'data-filter': position
      });
      positionOptions.append(newOption);
    });

    Object.keys(uniqueWorkAuths).forEach(function(authorisation) {
      var newOption = $('<button/>',
      {
        'html': authorisation + ' <span class="filter__badge badge badge-pill">' + uniqueWorkAuths[authorisation] + '</span>',
        'class': 'authorisation-filter__option filter__option dropdown-item',
        'data-filter': authorisation
      });
      workAuthOptions.append(newOption);
    });
  };

  function setIndustryFilter() {
    $('.industry-filter__option').click(function() {
      var filter = $(this).attr('data-filter');
      activeFilters.industry = filter;
      var clearBtn = $('<button />',
      {
        'html': '<i class="fas fa-times"></i>',
        'class': 'filter__clear btn',
        'click': clearIndustryFilter
      });
      var filterElem = $(".industry-filter");
      filterElem.html(clearBtn);
      filterElem.append(filter);
      onFilterChanged();
    });
  };

  function setCompanyFilter() {
    $('.company-table__search').bind('input', function() {
      var filter = $(this).val();
      activeFilters.name = filter;
      onFilterChanged();
    });
  }

  function setPositionFilter() {
    $('.position-filter__option').click(function() {
      var filter = $(this).attr('data-filter');
      activeFilters.position = filter;
      var clearBtn = $('<button />',
      {
        'html': '<i class="fas fa-times"></i>',
        'class': 'filter__clear btn',
        'click': clearPositionFilter
      });
      var filterElem = $(".position-filter");
      filterElem.html(clearBtn);
      filterElem.append(filter);
      onFilterChanged();
    });
  };

  function setAuthorisationFilter() {
    $('.authorisation-filter__option').click(function() {
      var filter = $(this).attr('data-filter');
      activeFilters.workAuth = filter;
      var clearBtn = $('<button />',
      {
        'html': '<i class="fas fa-times"></i>',
        'class': 'filter__clear btn',
        'click': clearAuthorisationFilter
      });
      var filterElem = $(".authorisation-filter");
      filterElem.html(clearBtn);
      filterElem.append(filter);
      onFilterChanged();
    });
  };

  function onFilterChanged() {
    $('.company-table tr:not(:first-child)').each(function() {
      var name = $('td:nth-child(' + columnMap.name + ')', this).text();
      var industry = $('td:nth-child(' + columnMap.industry + ')', this).text();
      var position = $('td:nth-child(' + columnMap.position + ')', this).text();
      var workAuth = $('td:nth-child(' + columnMap.workAuth + ')', this).text();

      if (name.indexOf(activeFilters.name) === -1) {
        $(this).hide();
      } else if (industry.indexOf(activeFilters.industry) === -1) {
        $(this).hide();
      } else if(position.indexOf(activeFilters.position) === -1) {
        $(this).hide();
      } else if(workAuth.indexOf(activeFilters.workAuth) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  };

  function clearIndustryFilter() {
    activeFilters.industry = "";
    $(".industry-filter").text('Industry');
    onFilterChanged();
  }

  function clearPositionFilter() {
    activeFilters.position = "";
    $(".position-filter").text('Position');
    onFilterChanged();
  }

  function clearAuthorisationFilter() {
    activeFilters.workAuth = "";
    $(".authorisation-filter").text('Work Authorisation');
    onFilterChanged();
  }

  createFilterOptions();
  setIndustryFilter();
  setPositionFilter();
  setAuthorisationFilter();
  setCompanyFilter();
});