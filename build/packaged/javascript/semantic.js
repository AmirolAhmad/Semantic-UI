/*
 * # Semantic - Accordion
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

$.fn.accordion = function(parameters) {
  var
    $allModules     = $(this),

<<<<<<< HEAD
    settings        = ( $.isPlainObject(parameters) )
      ? $.extend(true, {}, $.fn.accordion.settings, parameters)
      : $.fn.accordion.settings,

    className       = settings.className,
    namespace       = settings.namespace,
    selector        = settings.selector,
    error           = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,
    moduleSelector  = $allModules.selector || '',

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $allModules
    .each(function() {
      var
<<<<<<< HEAD
=======
        settings        = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.accordion.settings, parameters)
          : $.extend({}, $.fn.accordion.settings),

        className       = settings.className,
        namespace       = settings.namespace,
        selector        = settings.selector,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,
        moduleSelector  = $allModules.selector || '',

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $module  = $(this),
        $title   = $module.find(selector.title),
        $content = $module.find(selector.content),

        element  = this,
        instance = $module.data(moduleNamespace),
        module
      ;

      module = {

        initialize: function() {
          module.debug('Initializing accordion with bound events', $module);
          // initializing
          $title
            .on('click' + eventNamespace, module.event.click)
          ;
          module.instantiate();
        },

        instantiate: function() {
<<<<<<< HEAD
=======
          instance = module;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.debug('Destroying previous accordion for', $module);
          $module
            .removeData(moduleNamespace)
          ;
          $title
            .off(eventNamespace)
          ;
        },

        event: {
          click: function() {
            module.verbose('Title clicked', this);
            var
              $activeTitle = $(this),
              index        = $title.index($activeTitle)
            ;
            module.toggle(index);
          },
          resetStyle: function() {
            module.verbose('Resetting styles on element', this);
            $(this)
              .attr('style', '')
              .removeAttr('style')
              .children()
                .attr('style', '')
                .removeAttr('style')
            ;
          }
        },

        toggle: function(index) {
          module.debug('Toggling content content at index', index);
          var
            $activeTitle   = $title.eq(index),
            $activeContent = $activeTitle.next($content),
            contentIsOpen  = $activeContent.is(':visible')
          ;
          if(contentIsOpen) {
            if(settings.collapsible) {
              module.close(index);
            }
            else {
              module.debug('Cannot close accordion content collapsing is disabled');
            }
          }
          else {
            module.open(index);
          }
        },

        open: function(index) {
          var
            $activeTitle     = $title.eq(index),
            $activeContent   = $activeTitle.next($content),
<<<<<<< HEAD
            $previousTitle   = $title.filter('.' + className.active),
=======
            $previousTitle   = $activeTitle.siblings(selector.title).filter('.' + className.active),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $previousContent = $previousTitle.next($title),
            contentIsOpen    =  ($previousTitle.size() > 0)
          ;
          if( !$activeContent.is(':animated') ) {
            module.debug('Opening accordion content', $activeTitle);
            if(settings.exclusive && contentIsOpen) {
              $previousTitle
                .removeClass(className.active)
              ;
              $previousContent
                .stop()
                .children()
                  .animate({
                    opacity: 0
                  }, settings.duration, module.event.resetStyle)
                  .end()
                .slideUp(settings.duration , settings.easing, function() {
                  $previousContent
                    .removeClass(className.active)
                    .attr('style', '')
                    .removeAttr('style')
                    .children()
                      .attr('style', '')
                      .removeAttr('style')
                  ;
                })
              ;
            }
            $activeTitle
              .addClass(className.active)
            ;
            $activeContent
              .stop()
              .children()
                .attr('style', '')
                .removeAttr('style')
                .end()
              .slideDown(settings.duration, settings.easing, function() {
                $activeContent
                  .addClass(className.active)
                  .attr('style', '')
                  .removeAttr('style')
                ;
                $.proxy(settings.onOpen, $activeContent)();
                $.proxy(settings.onChange, $activeContent)();
              })
            ;
          }
        },

        close: function(index) {
          var
            $activeTitle   = $title.eq(index),
            $activeContent = $activeTitle.next($content)
          ;
<<<<<<< HEAD
          module.debug('Closing accordion content', $activeTitle);
=======
          module.debug('Closing accordion content', $activeContent);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $activeTitle
            .removeClass(className.active)
          ;
          $activeContent
            .removeClass(className.active)
            .show()
            .stop()
            .children()
              .animate({
                opacity: 0
              }, settings.duration, module.event.resetStyle)
              .end()
            .slideUp(settings.duration, settings.easing, function(){
              $activeContent
                .attr('style', '')
                .removeAttr('style')
              ;
              $.proxy(settings.onClose, $activeContent)();
              $.proxy(settings.onChange, $activeContent)();
            })
          ;
        },

        setting: function(name, value) {
<<<<<<< HEAD
          module.debug('Changing setting', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
          module.debug('Changing internal', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
<<<<<<< HEAD
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;
<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.accordion.settings = {
  name        : 'Accordion',
  namespace   : 'accordion',

  debug       : true,
  verbose     : true,
  performance : true,

  exclusive   : true,
  collapsible : true,

<<<<<<< HEAD
  duration    : 300,
  easing      : 'linear',
=======
  duration    : 500,
  easing      : 'easeInOutQuint',
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

  onOpen      : function(){},
  onClose     : function(){},
  onChange    : function(){},

  error: {
    method    : 'The method you called is not defined'
  },

  className   : {
    active : 'active'
  },

  selector    : {
    title   : '.title',
    content : '.content'
<<<<<<< HEAD
  },
=======
  }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6


};

<<<<<<< HEAD
})( jQuery, window , document );

=======
// Adds easing
$.extend( $.easing, {
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  }
});

})( jQuery, window , document );


<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
/*
 * # Semantic - API
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

  $.api = $.fn.api = function(parameters) {

    var
      settings       = $.extend(true, {}, $.api.settings, parameters),

      // if this keyword isn't a jQuery object, create one
      context        = (typeof this != 'function')
        ? this
        : $('<div/>'),
      // context defines the element used for loading/error state
      $context       = (settings.stateContext)
        ? $(settings.stateContext)
        : $(context),
      // module is the thing that initiates the api action, can be independent of context
      $module = typeof this == 'object'
        ? $(context)
        : $context,

      element         = this,
      time            = new Date().getTime(),
      performance     = [],

      moduleSelector  = $module.selector || '',
      moduleNamespace = settings.namespace + '-module',

      className       = settings.className,
      metadata        = settings.metadata,
      error           = settings.error,

      instance        = $module.data(moduleNamespace),

      query           = arguments[0],
      methodInvoked   = (instance !== undefined && typeof query == 'string'),
      queryArguments  = [].slice.call(arguments, 1),

      module,
<<<<<<< HEAD
      invokedResponse
=======
      returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    ;

    module = {
      initialize: function() {
        var
          runSettings,

          loadingTimer   = new Date().getTime(),
          loadingDelay,

          promise,
          url,

          formData       = {},
          data,

          ajaxSettings   = {},
          xhr
        ;

        // serialize parent form if requested!
        if(settings.serializeForm && $(this).toJSON() !== undefined) {
          formData = module.get.formData();
          module.debug('Adding form data to API Request', formData);
          $.extend(true, settings.data, formData);
        }

        // let beforeSend change settings object
        runSettings = $.proxy(settings.beforeSend, $module)(settings);

        // check for exit conditions
        if(runSettings !== undefined && !runSettings) {
          module.error(error.beforeSend);
          module.reset();
          return;
        }

        // get real url from template
        url = module.get.url( module.get.templateURL() );

        // exit conditions reached from missing url parameters
        if( !url ) {
          module.error(error.missingURL);
          module.reset();
          return;
        }

        // promise handles notification on api request, so loading min. delay can occur for all notifications
        promise =
          $.Deferred()
            .always(function() {
              if(settings.stateContext) {
                $context
                  .removeClass(className.loading)
                ;
              }
              $.proxy(settings.complete, $module)();
            })
            .done(function(response) {
              module.debug('API request successful');
              // take a stab at finding success state if json
              if(settings.dataType == 'json') {
                if (response.error !== undefined) {
                  $.proxy(settings.failure, $context)(response.error, settings, $module);
                }
                else if ($.isArray(response.errors)) {
                  $.proxy(settings.failure, $context)(response.errors[0], settings, $module);
                }
                else {
                  $.proxy(settings.success, $context)(response, settings, $module);
                }
              }
              // otherwise
              else {
                $.proxy(settings.success, $context)(response, settings, $module);
              }
            })
            .fail(function(xhr, status, httpMessage) {
              var
                errorMessage = (settings.error[status] !== undefined)
                  ? settings.error[status]
                  : httpMessage,
                response
              ;
              // let em know unless request aborted
              if(xhr !== undefined) {
                // readyState 4 = done, anything less is not really sent
                if(xhr.readyState !== undefined && xhr.readyState == 4) {

                  // if http status code returned and json returned error, look for it
                  if( xhr.status != 200 && httpMessage !== undefined && httpMessage !== '') {
                    module.error(error.statusMessage + httpMessage);
                  }
                  else {
                    if(status == 'error' && settings.dataType == 'json') {
                      try {
                        response = $.parseJSON(xhr.responseText);
                        if(response && response.error !== undefined) {
                          errorMessage = response.error;
                        }
                      }
                      catch(error) {
                        module.error(error.JSONParse);
                      }
                    }
                  }
                  $context
                    .removeClass(className.loading)
                    .addClass(className.error)
                  ;
                  // show error state only for duration specified in settings
                  if(settings.errorLength > 0) {
                    setTimeout(function(){
                      $context
                        .removeClass(className.error)
                      ;
                    }, settings.errorLength);
                  }
                  module.debug('API Request error:', errorMessage);
                  $.proxy(settings.failure, $context)(errorMessage, settings, this);
                }
                else {
                  module.debug('Request Aborted (Most likely caused by page change)');
                }
              }
            })
        ;

        // look for params in data
        $.extend(true, ajaxSettings, settings, {
          success    : function(){},
          failure    : function(){},
          complete   : function(){},
          type       : settings.method || settings.type,
          data       : data,
          url        : url,
          beforeSend : settings.beforeXHR
        });

        if(settings.stateContext) {
          $context
            .addClass(className.loading)
          ;
        }

        if(settings.progress) {
          module.verbose('Adding progress events');
          $.extend(true, ajaxSettings, {
            xhr: function() {
              var
                xhr = new window.XMLHttpRequest()
              ;
              xhr.upload.addEventListener('progress', function(event) {
                var
                  percentComplete
                ;
                if (event.lengthComputable) {
                  percentComplete = Math.round(event.loaded / event.total * 10000) / 100 + '%';
                  $.proxy(settings.progress, $context)(percentComplete, event);
                }
              }, false);
              xhr.addEventListener('progress', function(event) {
                var
                  percentComplete
                ;
                if (event.lengthComputable) {
                  percentComplete = Math.round(event.loaded / event.total * 10000) / 100 + '%';
                  $.proxy(settings.progress, $context)(percentComplete, event);
                }
              }, false);
              return xhr;
            }
          });
        }

        module.verbose('Creating AJAX request with settings: ', ajaxSettings);
        xhr =
          $.ajax(ajaxSettings)
            .always(function() {
              // calculate if loading time was below minimum threshold
              loadingDelay = ( settings.loadingLength - (new Date().getTime() - loadingTimer) );
              settings.loadingDelay = loadingDelay < 0
                ? 0
                : loadingDelay
              ;
            })
            .done(function(response) {
              var
                context = this
              ;
              setTimeout(function(){
                promise.resolveWith(context, [response]);
              }, settings.loadingDelay);
            })
            .fail(function(xhr, status, httpMessage) {
              var
                context = this
              ;
              // page triggers abort on navigation, dont show error
              if(status != 'abort') {
                setTimeout(function(){
                  promise.rejectWith(context, [xhr, status, httpMessage]);
                }, settings.loadingDelay);
              }
              else {
                $context
                  .removeClass(className.error)
                  .removeClass(className.loading)
                ;
              }
            })
        ;
        if(settings.stateContext) {
          $module
            .data(metadata.promise, promise)
            .data(metadata.xhr, xhr)
          ;
        }
      },

      get: {
        formData: function() {
          return $module
            .closest('form')
              .toJSON()
          ;
        },
        templateURL: function() {
          var
            action = $module.data(settings.metadata.action) || settings.action || false,
            url
          ;
          if(action) {
            module.debug('Creating url for: ', action);
            if(settings.api[action] !== undefined) {
              url = settings.api[action];
            }
            else {
              module.error(error.missingAction);
            }
          }
          // override with url if specified
          if(settings.url) {
            url = settings.url;
            module.debug('Getting url', url);
          }
          return url;
        },
        url: function(url, urlData) {
          var
            urlVariables
          ;
          if(url) {
            urlVariables = url.match(settings.regExpTemplate);
            urlData      = urlData || settings.urlData;

            if(urlVariables) {
              module.debug('Looking for URL variables', urlVariables);
              $.each(urlVariables, function(index, templateValue){
                var
                  term      = templateValue.substr( 2, templateValue.length - 3),
                  termValue = ($.isPlainObject(urlData) && urlData[term] !== undefined)
                    ? urlData[term]
                    : ($module.data(term) !== undefined)
                      ? $module.data(term)
                      : urlData[term]
                ;
                module.verbose('Looking for variable', term, $module, $module.data(term), urlData[term]);
                // remove optional value
                if(termValue === false) {
                  module.debug('Removing variable from URL', urlVariables);
                  url = url.replace('/' + templateValue, '');
                }
                // undefined condition
                else if(termValue === undefined || !termValue) {
                  module.error(error.missingParameter + term);
                  url = false;
                  return false;
                }
                else {
                  url = url.replace(templateValue, termValue);
                }
              });
            }
          }
          return url;
        }
      },

      // reset api request
      reset: function() {
        $module
          .data(metadata.promise, false)
          .data(metadata.xhr, false)
        ;
        $context
          .removeClass(className.error)
          .removeClass(className.loading)
        ;
      },

      setting: function(name, value) {
<<<<<<< HEAD
        if(value !== undefined) {
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else {
            settings[name] = value;
          }
=======
        if( $.isPlainObject(name) ) {
          $.extend(true, settings, name);
        }
        else if(value !== undefined) {
          settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
        else {
          return settings[name];
        }
      },
      internal: function(name, value) {
<<<<<<< HEAD
        if(value !== undefined) {
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else {
            module[name] = value;
          }
=======
        if( $.isPlainObject(name) ) {
          $.extend(true, module, name);
        }
        else if(value !== undefined) {
          module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
        else {
          return module[name];
        }
      },
      debug: function() {
        if(settings.debug) {
          if(settings.performance) {
            module.performance.log(arguments);
          }
          else {
            module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
            module.debug.apply(console, arguments);
          }
        }
      },
      verbose: function() {
        if(settings.verbose && settings.debug) {
          if(settings.performance) {
            module.performance.log(arguments);
          }
          else {
            module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
            module.verbose.apply(console, arguments);
          }
        }
      },
      error: function() {
        module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
        module.error.apply(console, arguments);
      },
      performance: {
        log: function(message) {
          var
            currentTime,
            executionTime,
            previousTime
          ;
          if(settings.performance) {
            currentTime   = new Date().getTime();
            previousTime  = time || currentTime;
            executionTime = currentTime - previousTime;
            time          = currentTime;
            performance.push({
              'Element'        : element,
              'Name'           : message[0],
              'Arguments'      : [].slice.call(message, 1) || '',
              'Execution Time' : executionTime
            });
          }
          clearTimeout(module.performance.timer);
          module.performance.timer = setTimeout(module.performance.display, 100);
        },
        display: function() {
          var
            title = settings.name + ':',
            totalTime = 0
          ;
          time = false;
          clearTimeout(module.performance.timer);
          $.each(performance, function(index, data) {
            totalTime += data['Execution Time'];
          });
          title += ' ' + totalTime + 'ms';
          if(moduleSelector) {
            title += ' \'' + moduleSelector + '\'';
          }
          if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
            console.groupCollapsed(title);
            if(console.table) {
              console.table(performance);
            }
            else {
              $.each(performance, function(index, data) {
                console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
              });
            }
            console.groupEnd();
          }
          performance = [];
        }
      },
      invoke: function(query, passedArguments, context) {
        var
<<<<<<< HEAD
=======
          object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          maxDepth,
          found,
          response
        ;
        passedArguments = passedArguments || queryArguments;
        context         = element         || context;
<<<<<<< HEAD
        if(typeof query == 'string' && instance !== undefined) {
=======
        if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          query    = query.split(/[\. ]/);
          maxDepth = query.length - 1;
          $.each(query, function(depth, value) {
            var camelCaseValue = (depth != maxDepth)
              ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
              : query
            ;
<<<<<<< HEAD
            if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
              instance = instance[value];
            }
            else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
              instance = instance[camelCaseValue];
            }
            else if( instance[value] !== undefined ) {
              found = instance[value];
              return false;
            }
            else if( instance[camelCaseValue] !== undefined ) {
              found = instance[camelCaseValue];
              return false;
            }
            else {
              module.error(error.method);
=======
            if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
              object = object[camelCaseValue];
            }
            else if( object[camelCaseValue] !== undefined ) {
              found = object[camelCaseValue];
              return false;
            }
            else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
              object = object[value];
            }
            else if( object[value] !== undefined ) {
              found = object[value];
              return false;
            }
            else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              return false;
            }
          });
        }
        if ( $.isFunction( found ) ) {
          response = found.apply(context, passedArguments);
        }
        else if(found !== undefined) {
          response = found;
        }
<<<<<<< HEAD
        if($.isArray(invokedResponse)) {
          invokedResponse.push(response);
        }
        else if(typeof invokedResponse == 'string') {
          invokedResponse = [invokedResponse, response];
        }
        else if(response !== undefined) {
          invokedResponse = response;
=======
        if($.isArray(returnedValue)) {
          returnedValue.push(response);
        }
        else if(returnedValue !== undefined) {
          returnedValue = [returnedValue, response];
        }
        else if(response !== undefined) {
          returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
        return found;
      }
    };

    if(methodInvoked) {
      if(instance === undefined) {
        module.initialize();
      }
      module.invoke(query);
    }
    else {
      if(instance !== undefined) {
        module.destroy();
      }
      module.initialize();
    }

<<<<<<< HEAD
    return (invokedResponse !== undefined)
      ? invokedResponse
=======
    return (returnedValue !== undefined)
      ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
      : this
    ;
  };

  // handle DOM attachment to API functionality
  $.fn.apiButton = function(parameters) {
    $(this)
      .each(function(){
        var
          // if only function passed it is success callback
          $module  = $(this),
          selector = $(this).selector || '',

          settings = ( $.isFunction(parameters) )
            ? $.extend(true, {}, $.api.settings, $.fn.apiButton.settings, { stateContext: this, success: parameters })
            : $.extend(true, {}, $.api.settings, $.fn.apiButton.settings, { stateContext: this}, parameters),
          module
        ;
        module = {
          initialize: function() {
            if(settings.context && selector !== '') {
              $(settings.context)
                .on(selector, 'click.' + settings.namespace, module.click)
              ;
            }
            else {
              $module
                .on('click.' + settings.namespace, module.click)
              ;
            }
          },
          click: function() {
            if(!settings.filter || $(this).filter(settings.filter).size() === 0) {
              $.proxy( $.api, this )(settings);
            }
          }
        };
        module.initialize();
      })
    ;
    return this;
  };

  $.api.settings = {

    name        : 'API',
    namespace   : 'api',

    debug       : true,
    verbose     : true,
    performance : true,

    api         : {},

    beforeSend  : function(settings) {
      return settings;
    },
    beforeXHR   : function(xhr) {},
    success     : function(response) {},
    complete    : function(response) {},
    failure     : function(errorCode) {},
    progress    : false,

    error : {
      missingAction    : 'API action used but no url was defined',
      missingURL       : 'URL not specified for the API action',
      missingParameter : 'Missing an essential URL parameter: ',

      timeout          : 'Your request timed out',
      error            : 'There was an error with your request',
      parseError       : 'There was an error parsing your request',
      JSONParse        : 'JSON could not be parsed during error handling',
      statusMessage    : 'Server gave an error: ',
      beforeSend       : 'The before send function has aborted the request',
      exitConditions   : 'API Request Aborted. Exit conditions met'
    },

    className: {
      loading : 'loading',
      error   : 'error'
    },

    metadata: {
      action  : 'action',
      promise : 'promise',
      xhr     : 'xhr'
    },

    regExpTemplate: /\{\$([A-z]+)\}/g,

    action        : false,
    url           : false,
    urlData       : false,
    serializeForm : false,

    stateContext  : false,

    method        : 'get',
    data          : {},
    dataType      : 'json',
    cache         : true,

    loadingLength : 200,
    errorLength   : 2000

  };

  $.fn.apiButton.settings = {
    filter       : '.disabled, .loading',
    context      : false,
    stateContext : false
  };

})( jQuery, window , document );
/*
 * # Semantic - Colorize
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

  $.fn.colorize = function(parameters) {
    var
      settings        = $.extend(true, {}, $.fn.colorize.settings, parameters),
      // hoist arguments
      moduleArguments = arguments || false
    ;
    $(this)
      .each(function(instanceIndex) {

        var
          $module         = $(this),

          mainCanvas      = $('<canvas />')[0],
          imageCanvas     = $('<canvas />')[0],
          overlayCanvas   = $('<canvas />')[0],

          backgroundImage = new Image(),

          // defs
          mainContext,
          imageContext,
          overlayContext,

          image,
          imageName,

          width,
          height,

          // shortucts
          colors    = settings.colors,
          paths     = settings.paths,
          namespace = settings.namespace,
          error     = settings.error,

          // boilerplate
          instance   = $module.data('module-' + namespace),
          module
        ;

        module = {

          checkPreconditions: function() {
            module.debug('Checking pre-conditions');

            if( !$.isPlainObject(colors) || $.isEmptyObject(colors) ) {
              module.error(error.undefinedColors);
              return false;
            }
            return true;
          },

          async: function(callback) {
            if(settings.async) {
              setTimeout(callback, 0);
            }
            else {
              callback();
            }
          },

          getMetadata: function() {
            module.debug('Grabbing metadata');
            image     = $module.data('image') || settings.image || undefined;
            imageName = $module.data('name')  || settings.name  || instanceIndex;
            width     = settings.width        || $module.width();
            height    = settings.height       || $module.height();
            if(width === 0 || height === 0) {
              module.error(error.undefinedSize);
            }
          },

          initialize: function() {
            module.debug('Initializing with colors', colors);
            if( module.checkPreconditions() ) {

              module.async(function() {
                module.getMetadata();
                module.canvas.create();

                module.draw.image(function() {
                  module.draw.colors();
                  module.canvas.merge();
                });
                $module
                  .data('module-' + namespace, module)
                ;
              });
            }
          },

          redraw: function() {
            module.debug('Redrawing image');
            module.async(function() {
              module.canvas.clear();
              module.draw.colors();
              module.canvas.merge();
            });
          },

          change: {
            color: function(colorName, color) {
              module.debug('Changing color', colorName);
              if(colors[colorName] === undefined) {
                module.error(error.missingColor);
                return false;
              }
              colors[colorName] = color;
              module.redraw();
            }
          },

          canvas: {
            create: function() {
              module.debug('Creating canvases');

              mainCanvas.width     = width;
              mainCanvas.height    = height;
              imageCanvas.width    = width;
              imageCanvas.height   = height;
              overlayCanvas.width  = width;
              overlayCanvas.height = height;

              mainContext    = mainCanvas.getContext('2d');
              imageContext   = imageCanvas.getContext('2d');
              overlayContext = overlayCanvas.getContext('2d');

              $module
                .append( mainCanvas )
              ;
              mainContext    = $module.children('canvas')[0].getContext('2d');
            },
            clear: function(context) {
              module.debug('Clearing canvas');
              overlayContext.fillStyle = '#FFFFFF';
              overlayContext.fillRect(0, 0, width, height);
            },
            merge: function() {
              if( !$.isFunction(mainContext.blendOnto) ) {
                module.error(error.missingPlugin);
                return;
              }
              mainContext.putImageData( imageContext.getImageData(0, 0, width, height), 0, 0);
              overlayContext.blendOnto(mainContext, 'multiply');
            }
          },

          draw: {

            image: function(callback) {
              module.debug('Drawing image');
              callback = callback || function(){};
              if(image) {
                backgroundImage.src    = image;
                backgroundImage.onload = function() {
                  imageContext.drawImage(backgroundImage, 0, 0);
                  callback();
                };
              }
              else {
                module.error(error.noImage);
                callback();
              }
            },

            colors: function() {
              module.debug('Drawing color overlays', colors);
              $.each(colors, function(colorName, color) {
                settings.onDraw(overlayContext, imageName, colorName, color);
              });
            }

          },

          debug: function(message, variableName) {
            if(settings.debug) {
              if(variableName !== undefined) {
                console.info(settings.name + ': ' + message, variableName);
              }
              else {
                console.info(settings.name + ': ' + message);
              }
            }
          },
          error: function(errorMessage) {
            console.warn(settings.name + ': ' + errorMessage);
          },
          invoke: function(methodName, context, methodArguments) {
            var
              method
            ;
            methodArguments = methodArguments || Array.prototype.slice.call( arguments, 2 );

            if(typeof methodName == 'string' && instance !== undefined) {
              methodName = methodName.split('.');
              $.each(methodName, function(index, name) {
                if( $.isPlainObject( instance[name] ) ) {
                  instance = instance[name];
                  return true;
                }
                else if( $.isFunction( instance[name] ) ) {
                  method = instance[name];
                  return true;
                }
                module.error(settings.error.method);
                return false;
              });
            }
            return ( $.isFunction( method ) )
              ? method.apply(context, methodArguments)
              : false
            ;
          }

        };
        if(instance !== undefined && moduleArguments) {
          // simpler than invoke realizing to invoke itself (and losing scope due prototype.call()
          if(moduleArguments[0] == 'invoke') {
            moduleArguments = Array.prototype.slice.call( moduleArguments, 1 );
          }
          return module.invoke(moduleArguments[0], this, Array.prototype.slice.call( moduleArguments, 1 ) );
        }
        // initializing
        module.initialize();
      })
    ;
    return this;
  };

  $.fn.colorize.settings = {
    name      : 'Image Colorizer',
    debug     : true,
    namespace : 'colorize',

    onDraw    : function(overlayContext, imageName, colorName, color) {},

    // whether to block execution while updating canvas
    async     : true,
    // object containing names and default values of color regions
    colors    : {},

    metadata: {
      image : 'image',
      name  : 'name'
    },

    error: {
      noImage         : 'No tracing image specified',
      undefinedColors : 'No default colors specified.',
      missingColor    : 'Attempted to change color that does not exist',
      missingPlugin   : 'Blend onto plug-in must be included',
      undefinedHeight : 'The width or height of image canvas could not be automatically determined. Please specify a height.'
    }

  };

})( jQuery, window , document );

/*
 * # Semantic - Form Validation
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.form = function(fields, parameters) {
  var
    $allModules     = $(this),

    settings        = $.extend(true, {}, $.fn.form.settings, parameters),
    validation      = $.extend({}, $.fn.form.settings.defaults, fields),

    namespace       = settings.namespace,
    metadata        = settings.metadata,
    selector        = settings.selector,
    className       = settings.className,
    error           = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,

    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $allModules
    .each(function() {
      var
        $module    = $(this),
        $field     = $(this).find(selector.field),
        $group     = $(this).find(selector.group),
        $message   = $(this).find(selector.message),
        $prompt    = $(this).find(selector.prompt),
        $submit    = $(this).find(selector.submit),

        formErrors = [],

        element    = this,
        instance   = $module.data(moduleNamespace),
        module
      ;

      module      = {

        initialize: function() {
          module.verbose('Initializing form validation', $module, validation, settings);
          if(settings.keyboardShortcuts) {
            $field
              .on('keydown' + eventNamespace, module.event.field.keydown)
            ;
          }
          $module
            .on('submit' + eventNamespace, module.validate.form)
          ;
          $field
            .on('blur' + eventNamespace, module.event.field.blur)
          ;
          $submit
            .on('click' + eventNamespace, module.submit)
          ;
          $field
            .on(module.get.changeEvent() + eventNamespace, module.event.field.change)
          ;
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module', instance);
          $module
            .off(eventNamespace)
            .removeData(moduleNamespace)
          ;
        },

        refresh: function() {
          module.verbose('Refreshing selector cache');
          $field = $module.find(selector.field);
        },

        submit: function() {
          module.verbose('Submitting form', $module);
          $module
            .submit()
          ;
        },

        event: {
          field: {
            keydown: function(event) {
              var
                $field  = $(this),
                key     = event.which,
                keyCode = {
                  enter  : 13,
                  escape : 27
                }
              ;
              if( key == keyCode.escape) {
                module.verbose('Escape key pressed blurring field');
                $field
                  .blur()
                ;
              }
              if(!event.ctrlKey && key == keyCode.enter && $field.is(selector.input) ) {
                module.debug('Enter key pressed, submitting form');
                $submit
                  .addClass(className.down)
                ;
                $field
                  .one('keyup' + eventNamespace, module.event.field.keyup)
                ;
                event.preventDefault();
                return false;
              }
            },
            keyup: function() {
              module.verbose('Doing keyboard shortcut form submit');
              $submit.removeClass(className.down);
              module.submit();
            },
            blur: function() {
              var
                $field      = $(this),
                $fieldGroup = $field.closest($group)
              ;
              if( $fieldGroup.hasClass(className.error) ) {
                module.debug('Revalidating field', $field,  module.get.validation($field));
                module.validate.field( module.get.validation($field) );
              }
              else if(settings.on == 'blur' || settings.on == 'change') {
                module.validate.field( module.get.validation($field) );
              }
            },
            change: function() {
              var
                $field      = $(this),
                $fieldGroup = $field.closest($group)
              ;
<<<<<<< HEAD
              if( $fieldGroup.hasClass(className.error) ) {
                module.debug('Revalidating field', $field,  module.get.validation($field));
                module.validate.field( module.get.validation($field) );
              }
              else if(settings.on == 'change') {
                module.validate.field( module.get.validation($field) );
=======
              if(settings.on == 'change' || ( $fieldGroup.hasClass(className.error) && settings.revalidate) ) {
                clearTimeout(module.timer);
                module.timer = setTimeout(function() {
                  module.debug('Revalidating field', $field,  module.get.validation($field));
                  module.validate.field( module.get.validation($field) );
                }, settings.delay);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              }
            }
          }

        },

        get: {
          changeEvent: function() {
            return (document.createElement('input').oninput !== undefined)
              ? 'input'
              : (document.createElement('input').onpropertychange !== undefined)
                ? 'propertychange'
                : 'keyup'
            ;
          },
          field: function(identifier) {
            module.verbose('Finding field with identifier', identifier);
            if( $field.filter('#' + identifier).size() > 0 ) {
              return $field.filter('#' + identifier);
            }
            else if( $field.filter('[name="' + identifier +'"]').size() > 0 ) {
              return $field.filter('[name="' + identifier +'"]');
            }
            else if( $field.filter('[data-' + metadata.validate + '="'+ identifier +'"]').size() > 0 ) {
              return $field.filter('[data-' + metadata.validate + '="'+ identifier +'"]');
            }
            return $('<input/>');
          },
          validation: function($field) {
            var
              rules
            ;
            $.each(validation, function(fieldName, field) {
              if( module.get.field(field.identifier).get(0) == $field.get(0) ) {
                rules = field;
              }
            });
            return rules || false;
          }
        },

        has: {

          field: function(identifier) {
            module.verbose('Checking for existence of a field with identifier', identifier);
            if( $field.filter('#' + identifier).size() > 0 ) {
              return true;
            }
            else if( $field.filter('[name="' + identifier +'"]').size() > 0 ) {
              return true;
            }
            else if( $field.filter('[data-' + metadata.validate + '="'+ identifier +'"]').size() > 0 ) {
              return true;
            }
            return false;
          }

        },

        add: {
<<<<<<< HEAD
          prompt: function(field, errors) {
            var
              $field       = module.get.field(field.identifier),
=======
          prompt: function(identifier, errors) {
            var
              $field       = module.get.field(identifier),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              $fieldGroup  = $field.closest($group),
              $prompt      = $fieldGroup.find(selector.prompt),
              promptExists = ($prompt.size() !== 0)
            ;
<<<<<<< HEAD
            module.verbose('Adding inline error', field);
=======
            errors = (typeof errors == 'string')
              ? [errors]
              : errors
            ;
            module.verbose('Adding field error state', identifier);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $fieldGroup
              .addClass(className.error)
            ;
            if(settings.inline) {
              if(!promptExists) {
                $prompt = settings.templates.prompt(errors);
                $prompt
                  .appendTo($fieldGroup)
                ;
              }
              $prompt
                .html(errors[0])
              ;
              if(!promptExists) {
<<<<<<< HEAD
                if(settings.transition && $.fn.transition !== undefined) {
=======
                if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                  module.verbose('Displaying error with css transition', settings.transition);
                  $prompt.transition(settings.transition + ' in', settings.duration);
                }
                else {
                  module.verbose('Displaying error with fallback javascript animation');
                  $prompt
                    .fadeIn(settings.duration)
                  ;
                }
              }
<<<<<<< HEAD
=======
              else {
                module.verbose('Inline errors are disabled, no inline error added', identifier);
              }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
          },
          errors: function(errors) {
            module.debug('Adding form error messages', errors);
            $message
              .html( settings.templates.error(errors) )
            ;
          }
        },

        remove: {
          prompt: function(field) {
            var
              $field      = module.get.field(field.identifier),
              $fieldGroup = $field.closest($group),
              $prompt     = $fieldGroup.find(selector.prompt)
            ;
            $fieldGroup
              .removeClass(className.error)
            ;
            if(settings.inline && $prompt.is(':visible')) {
              module.verbose('Removing prompt for field', field);
<<<<<<< HEAD
              if(settings.transition && $.fn.transition !== undefined) {
=======
              if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                $prompt.transition(settings.transition + ' out', settings.duration, function() {
                  $prompt.remove();
                });
              }
              else {
                $prompt
                  .fadeOut(settings.duration, function(){
                    $prompt.remove();
                  })
                ;
              }
            }
          }
        },

        validate: {

          form: function(event) {
            var
              allValid = true
            ;
            // reset errors
            formErrors = [];
            $.each(validation, function(fieldName, field) {
              if( !( module.validate.field(field) ) ) {
                allValid = false;
              }
            });
            if(allValid) {
              module.debug('Form has no validation errors, submitting');
              $module
                .removeClass(className.error)
                .addClass(className.success)
              ;
              $.proxy(settings.onSuccess, this)(event);
            }
            else {
              module.debug('Form has errors');
              $module.addClass(className.error);
              if(!settings.inline) {
                module.add.errors(formErrors);
              }
              return $.proxy(settings.onFailure, this)(formErrors);
            }
          },

          // takes a validation object and returns whether field passes validation
          field: function(field) {
            var
              $field      = module.get.field(field.identifier),
              fieldValid  = true,
              fieldErrors = []
            ;
            if(field.rules !== undefined) {
              $.each(field.rules, function(index, rule) {
                if( module.has.field(field.identifier) && !( module.validate.rule(field, rule) ) ) {
                  module.debug('Field is invalid', field.identifier, rule.type);
                  fieldErrors.push(rule.prompt);
                  fieldValid = false;
                }
              });
            }
            if(fieldValid) {
              module.remove.prompt(field, fieldErrors);
              $.proxy(settings.onValid, $field)();
            }
            else {
              formErrors = formErrors.concat(fieldErrors);
<<<<<<< HEAD
              module.add.prompt(field, fieldErrors);
=======
              module.add.prompt(field.identifier, fieldErrors);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              $.proxy(settings.onInvalid, $field)(fieldErrors);
              return false;
            }
            return true;
          },

          // takes validation rule and returns whether field passes rule
          rule: function(field, validation) {
            var
              $field        = module.get.field(field.identifier),
              type          = validation.type,
<<<<<<< HEAD
              value         = $field.val(),
=======
              value         = $.trim($field.val() + ''),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

              bracketRegExp = /\[(.*?)\]/i,
              bracket       = bracketRegExp.exec(type),
              isValid       = true,
              ancillary,
              functionType
            ;
            // if bracket notation is used, pass in extra parameters
            if(bracket !== undefined && bracket !== null) {
<<<<<<< HEAD
              ancillary    = bracket[1];
=======
              ancillary    = '' + bracket[1];
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              functionType = type.replace(bracket[0], '');
              isValid      = $.proxy(settings.rules[functionType], $module)(value, ancillary);
            }
            // normal notation
            else {
              isValid = $.proxy(settings.rules[type], $field)(value);
            }
            return isValid;
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          module.debug('Changing setting', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          module.debug('Changing internal', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }

    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.form.settings = {

  name              : 'Form',
  namespace         : 'form',

  debug             : true,
  verbose           : true,
  performance       : true,


  keyboardShortcuts : true,
  on                : 'submit',
  inline            : false,

<<<<<<< HEAD
=======
  delay             : 200,
  revalidate        : true,

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  transition        : 'scale',
  duration          : 150,


  onValid           : function() {},
  onInvalid         : function() {},
  onSuccess         : function() { return true; },
  onFailure         : function() { return false; },

  metadata : {
    validate: 'validate'
  },

  selector : {
    message : '.error.message',
    field   : 'input, textarea, select',
    group   : '.field',
    input   : 'input',
    prompt  : '.prompt',
    submit  : '.submit'
  },

  className : {
    error   : 'error',
    success : 'success',
    down    : 'down',
    label   : 'ui label prompt'
  },

  // errors
  error: {
    method   : 'The method you called is not defined.'
  },


<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  templates: {
    error: function(errors) {
      var
        html = '<ul class="list">'
      ;
      $.each(errors, function(index, value) {
        html += '<li>' + value + '</li>';
      });
      html += '</ul>';
      return $(html);
    },
    prompt: function(errors) {
      return $('<div/>')
        .addClass('ui red pointing prompt label')
        .html(errors[0])
      ;
    }
  },

  rules: {
    checked: function() {
      return ($(this).filter(':checked').size() > 0);
    },
    empty: function(value) {
      return !(value === undefined || '' === value);
    },
    email: function(value){
      var
<<<<<<< HEAD
        emailRegExp = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
=======
        emailRegExp = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "i")
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
      ;
      return emailRegExp.test(value);
    },
    length: function(value, requiredLength) {
      return (value !== undefined)
        ? (value.length >= requiredLength)
        : false
      ;
    },
    not: function(value, notValue) {
      return (value != notValue);
    },
    contains: function(value, text) {
<<<<<<< HEAD
=======
      text = text.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
      return (value.search(text) !== -1);
    },
    is: function(value, text) {
      return (value == text);
    },
    maxLength: function(value, maxLength) {
      return (value !== undefined)
        ? (value.length <= maxLength)
        : false
      ;
    },
    match: function(value, fieldIdentifier) {
      // use either id or name of field
      var
        $form = $(this),
        matchingValue
      ;
      if($form.find('#' + fieldIdentifier).size() > 0) {
        matchingValue = $form.find('#' + fieldIdentifier).val();
      }
      else if($form.find('[name=' + fieldIdentifier +']').size() > 0) {
        matchingValue = $form.find('[name=' + fieldIdentifier + ']').val();
      }
      else if( $form.find('[data-validate="'+ fieldIdentifier +'"]').size() > 0 ) {
        matchingValue = $form.find('[data-validate="'+ fieldIdentifier +'"]').val();
      }
      return (matchingValue !== undefined)
        ? ( value.toString() == matchingValue.toString() )
        : false
      ;
    },
    url: function(value) {
      var
        urlRegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      ;
      return urlRegExp.test(value);
    }
  }

};

})( jQuery, window , document );

/*
 * # Semantic - State
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.state = function(parameters) {
  var
    $allModules     = $(this),
    settings        = $.extend(true, {}, $.fn.state.settings, parameters),

    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),

    // shortcuts
    error         = settings.error,
    metadata      = settings.metadata,
    className     = settings.className,
    namespace     = settings.namespace,
    states        = settings.states,
    text          = settings.text,

    eventNamespace  = '.' + namespace,
    moduleNamespace = namespace + '-module',


<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $allModules
    .each(function() {
      var
        $module       = $(this),

        element       = this,
        instance      = $module.data(moduleNamespace),

        module
      ;
      module = {

        initialize: function() {
          module.verbose('Initializing module');

          // allow module to guess desired state based on element
          if(settings.automatic) {
            module.add.defaults();
          }

          // bind events with delegated events
          if(settings.context && moduleSelector !== '') {
            if( module.allows('hover') ) {
              $(element, settings.context)
                .on(moduleSelector, 'mouseenter' + eventNamespace, module.enable.hover)
                .on(moduleSelector, 'mouseleave' + eventNamespace, module.disable.hover)
              ;
            }
            if( module.allows('down') ) {
              $(element, settings.context)
                .on(moduleSelector, 'mousedown' + eventNamespace, module.enable.down)
                .on(moduleSelector, 'mouseup'   + eventNamespace, module.disable.down)
              ;
            }
            if( module.allows('focus') ) {
              $(element, settings.context)
                .on(moduleSelector, 'focus' + eventNamespace, module.enable.focus)
                .on(moduleSelector, 'blur'  + eventNamespace, module.disable.focus)
              ;
            }
            $(settings.context)
              .on(moduleSelector, 'mouseenter' + eventNamespace, module.change.text)
              .on(moduleSelector, 'mouseleave' + eventNamespace, module.reset.text)
              .on(moduleSelector, 'click'      + eventNamespace, module.toggle.state)
            ;
          }
          else {
            if( module.allows('hover') ) {
              $module
                .on('mouseenter' + eventNamespace, module.enable.hover)
                .on('mouseleave' + eventNamespace, module.disable.hover)
              ;
            }
            if( module.allows('down') ) {
              $module
                .on('mousedown' + eventNamespace, module.enable.down)
                .on('mouseup'   + eventNamespace, module.disable.down)
              ;
            }
            if( module.allows('focus') ) {
              $module
                .on('focus' + eventNamespace, module.enable.focus)
                .on('blur'  + eventNamespace, module.disable.focus)
              ;
            }
            $module
              .on('mouseenter' + eventNamespace, module.change.text)
              .on('mouseleave' + eventNamespace, module.reset.text)
              .on('click'      + eventNamespace, module.toggle.state)
            ;
          }
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module', instance);
          $module
            .off(eventNamespace)
            .removeData(moduleNamespace)
          ;
        },

        refresh: function() {
          module.verbose('Refreshing selector cache');
          $module = $(element);
        },

        add: {
          defaults: function() {
            var
              userStates = parameters && $.isPlainObject(parameters.states)
                ? parameters.states
                : {}
            ;
            $.each(settings.defaults, function(type, typeStates) {
              if( module.is[type] !== undefined && module.is[type]() ) {
                module.verbose('Adding default states', type, element);
                $.extend(settings.states, typeStates, userStates);
              }
            });
          }
        },

        is: {

          active: function() {
            return $module.hasClass(className.active);
          },
          loading: function() {
            return $module.hasClass(className.loading);
          },
          inactive: function() {
            return !( $module.hasClass(className.active) );
          },

          enabled: function() {
            return !( $module.is(settings.filter.active) );
          },
          disabled: function() {
            return ( $module.is(settings.filter.active) );
          },
          textEnabled: function() {
            return !( $module.is(settings.filter.text) );
          },

          // definitions for automatic type detection
          button: function() {
            return $module.is('.button:not(a, .submit)');
          },
          input: function() {
            return $module.is('input');
          }
        },

        allow: function(state) {
          module.debug('Now allowing state', state);
          states[state] = true;
        },
        disallow: function(state) {
          module.debug('No longer allowing', state);
          states[state] = false;
        },

        allows: function(state) {
          return states[state] || false;
        },

        enable: {
          state: function(state) {
            if(module.allows(state)) {
              $module.addClass( className[state] );
            }
          },
          // convenience
          focus: function() {
            $module.addClass(className.focus);
          },
          hover: function() {
            $module.addClass(className.hover);
          },
          down: function() {
            $module.addClass(className.down);
          },
        },

        disable: {
          state: function(state) {
            if(module.allows(state)) {
              $module.removeClass( className[state] );
            }
          },
          // convenience
          focus: function() {
            $module.removeClass(className.focus);
          },
          hover: function() {
            $module.removeClass(className.hover);
          },
          down: function() {
            $module.removeClass(className.down);
          },
        },

        toggle: {
          state: function() {
            var
              apiRequest = $module.data(metadata.promise)
            ;
            if( module.allows('active') && module.is.enabled() ) {
              module.refresh();
              if(apiRequest !== undefined) {
                module.listenTo(apiRequest);
              }
              else {
                module.change.state();
              }
            }
          }
        },

        listenTo: function(apiRequest) {
          module.debug('API request detected, waiting for state signal', apiRequest);
          if(apiRequest) {
            if(text.loading) {
              module.update.text(text.loading);
            }
            $.when(apiRequest)
              .then(function() {
                if(apiRequest.state() == 'resolved') {
                  module.debug('API request succeeded');
                  settings.activateTest   = function(){ return true; };
                  settings.deactivateTest = function(){ return true; };
                }
                else {
                  module.debug('API request failed');
                  settings.activateTest   = function(){ return false; };
                  settings.deactivateTest = function(){ return false; };
                }
                module.change.state();
              })
            ;
          }
          // xhr exists but set to false, beforeSend killed the xhr
          else {
            settings.activateTest   = function(){ return false; };
            settings.deactivateTest = function(){ return false; };
          }
        },

        // checks whether active/inactive state can be given
        change: {

          state: function() {
            module.debug('Determining state change direction');
            // inactive to active change
            if( module.is.inactive() ) {
              module.activate();
            }
            else {
              module.deactivate();
            }
            if(settings.sync) {
              module.sync();
            }
            $.proxy(settings.onChange, element)();
          },

          text: function() {
            if( module.is.textEnabled() ) {
              if( module.is.active() ) {
                if(text.hover) {
                  module.verbose('Changing text to hover text', text.hover);
                  module.update.text(text.hover);
                }
                else if(text.disable) {
                  module.verbose('Changing text to disable text', text.disable);
                  module.update.text(text.disable);
                }
              }
              else {
                if(text.hover) {
                  module.verbose('Changing text to hover text', text.disable);
                  module.update.text(text.hover);
                }
                else if(text.enable){
                  module.verbose('Changing text to enable text', text.enable);
                  module.update.text(text.enable);
                }
              }
            }
          }

        },

        activate: function() {
          if( $.proxy(settings.activateTest, element)() ) {
            module.debug('Setting state to active');
            $module
              .addClass(className.active)
            ;
            module.update.text(text.active);
          }
          $.proxy(settings.onActivate, element)();
        },

        deactivate: function() {
          if($.proxy(settings.deactivateTest, element)() ) {
            module.debug('Setting state to inactive');
            $module
              .removeClass(className.active)
            ;
            module.update.text(text.inactive);
          }
          $.proxy(settings.onDeactivate, element)();
        },

        sync: function() {
          module.verbose('Syncing other buttons to current state');
          if( module.is.active() ) {
            $allModules
              .not($module)
                .state('activate');
          }
          else {
            $allModules
              .not($module)
                .state('deactivate')
            ;
          }
        },

        get: {
          text: function() {
            return (settings.selector.text)
              ? $module.find(settings.selector.text).text()
              : $module.html()
            ;
          },
          textFor: function(state) {
            return text[state] || false;
          }
        },

        flash: {
          text: function(text, duration) {
            var
              previousText = module.get.text()
            ;
            module.debug('Flashing text message', text, duration);
            text     = text     || settings.text.flash;
            duration = duration || settings.flashDuration;
            module.update.text(text);
            setTimeout(function(){
              module.update.text(previousText);
            }, duration);
          }
        },

        reset: {
          // on mouseout sets text to previous value
          text: function() {
            var
              activeText   = text.active   || $module.data(metadata.storedText),
              inactiveText = text.inactive || $module.data(metadata.storedText)
            ;
            if( module.is.textEnabled() ) {
              if( module.is.active() && activeText) {
                module.verbose('Resetting active text', activeText);
                module.update.text(activeText);
              }
              else if(inactiveText) {
                module.verbose('Resetting inactive text', activeText);
                module.update.text(inactiveText);
              }
            }
          }
        },

        update: {
          text: function(text) {
            var
              currentText = module.get.text()
            ;
            if(text && text !== currentText) {
              module.debug('Updating text', text);
              if(settings.selector.text) {
                $module
                  .data(metadata.storedText, text)
                  .find(settings.selector.text)
                    .text(text)
                ;
              }
              else {
                $module
                  .data(metadata.storedText, text)
                  .html(text)
                ;
              }
            }
            else {
              module.debug('Text is already sane, ignoring update', text);
            }
          }
        },

        setting: function(name, value) {
          module.debug('Changing setting', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
          module.debug('Changing internal', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }

    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.state.settings = {

  // module info
  name : 'State',

  // debug output
  debug      : true,

  // verbose debug output
  verbose    : true,

  // namespace for events
  namespace  : 'state',

  // debug data includes performance
  performance: true,

  // callback occurs on state change
  onActivate   : function() {},
  onDeactivate : function() {},
  onChange     : function() {},

  // state test functions
  activateTest   : function() { return true; },
  deactivateTest : function() { return true; },

  // whether to automatically map default states
  automatic     : true,

  // activate / deactivate changes all elements instantiated at same time
  sync          : false,

  // default flash text duration, used for temporarily changing text of an element
  flashDuration : 3000,

  // selector filter
  filter     : {
    text   : '.loading, .disabled',
    active : '.disabled'
  },

  context    : false,

  // error
  error: {
    method : 'The method you called is not defined.'
  },

  // metadata
  metadata: {
    promise    : 'promise',
    storedText : 'stored-text'
  },

  // change class on state
  className: {
    focus   : 'focus',
    hover   : 'hover',
    down    : 'down',
    active  : 'active',
    loading : 'loading'
  },

  selector: {
    // selector for text node
    text: false
  },

  defaults : {
    input: {
      hover   : true,
      focus   : true,
      down    : true,
      loading : false,
      active  : false
    },
    button: {
      hover   : true,
      focus   : false,
      down    : true,
      active  : true,
      loading : true
    }
  },

  states     : {
    hover   : true,
    focus   : true,
    down    : true,
    loading : false,
    active  : false
  },

  text     : {
    flash    : false,
    hover    : false,
    active   : false,
    inactive : false,
    enable   : false,
    disable  : false
  }

};



})( jQuery, window , document );

/*
 * # Semantic - Chatroom
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

$.fn.chatroom = function(parameters) {
  var
<<<<<<< HEAD
    settings  = $.extend(true, {}, $.fn.chatroom.settings, parameters),

    className = settings.className,
    namespace = settings.namespace,
    selector  = settings.selector,
    error     = settings.error,

    // hoist arguments
    moduleArguments = arguments || false
=======
    $allModules    = $(this),
    moduleSelector = $allModules.selector || '',

    time           = new Date().getTime(),
    performance    = [],

    query          = arguments[0],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $(this)
    .each(function() {
      var
<<<<<<< HEAD
=======
        settings  = $.extend(true, {}, $.fn.chatroom.settings, parameters),

        className = settings.className,
        namespace = settings.namespace,
        selector  = settings.selector,
        error     = settings.error,

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $module         = $(this),

        $expandButton   = $module.find(selector.expandButton),
        $userListButton = $module.find(selector.userListButton),

        $userList       = $module.find(selector.userList),
        $room           = $module.find(selector.room),
        $userCount      = $module.find(selector.userCount),

        $log            = $module.find(selector.log),
        $message        = $module.find(selector.message),

        $messageInput   = $module.find(selector.messageInput),
        $messageButton  = $module.find(selector.messageButton),

        instance        = $module.data('module'),
<<<<<<< HEAD
=======
        element         = this,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

        html            = '',
        users           = {},

        channel,
        loggedInUser,

        message,
        count,

        height,

        pusher,
        module
      ;

      module = {

        width: {
          log      : $log.width(),
          userList : $userList.outerWidth()
        },

        initialize: function() {

          // check error conditions
          if(Pusher === undefined) {
            module.error(error.pusher);
          }
          if(settings.key === undefined || settings.channelName === undefined) {
            module.error(error.key);
            return false;
          }
          else if( !(settings.endpoint.message || settings.endpoint.authentication) ) {
            module.error(error.endpoint);
            return false;
          }

          // define pusher
          pusher                       = new Pusher(settings.key);
          Pusher.channel_auth_endpoint = settings.endpoint.authentication;

          channel = pusher.subscribe(settings.channelName);

          channel.bind('pusher:subscription_succeeded', module.user.list.create);
          channel.bind('pusher:subscription_error', module.error);
          channel.bind('pusher:member_added', module.user.joined);
          channel.bind('pusher:member_removed', module.user.left);
          channel.bind('update_messages', module.message.receive);

          $.each(settings.customEvents, function(label, value) {
            channel.bind(label, value);
          });

          // bind module events
          $userListButton
            .on('click.' +  namespace, module.event.toggleUserList)
          ;
          $expandButton
            .on('click.'   +  namespace, module.event.toggleExpand)
          ;
          $messageInput
            .on('keydown.' +  namespace, module.event.input.keydown)
            .on('keyup.'   +  namespace, module.event.input.keyup)
          ;
          $messageButton
            .on('mouseenter.' +  namespace, module.event.hover)
            .on('mouseleave.' +  namespace, module.event.hover)
            .on('click.' +  namespace, module.event.submit)
          ;
          // scroll to bottom of chat log
          $log
            .animate({
              scrollTop: $log.prop('scrollHeight')
            }, 400)
          ;
          $module
            .data('module', module)
            .addClass(className.loading)
          ;

        },

        // refresh module
        refresh: function() {
          // reset width calculations
          $userListButton
            .removeClass(className.active)
          ;
          module.width = {
            log      : $log.width(),
            userList : $userList.outerWidth()
          };
          if( $userListButton.hasClass(className.active) ) {
            module.user.list.hide();
          }
          $module.data('module', module);
        },

        user: {

          updateCount: function() {
            if(settings.userCount) {
              users = $module.data('users');
              count = 0;
              $.each(users, function() {
                count++;
              });
              $userCount
                .html( settings.templates.userCount(count) )
              ;
            }
          },

          // add user to user list
          joined: function(member) {
            users = $module.data('users');
            if(member.id != 'anonymous' && users[ member.id ] === undefined ) {
              users[ member.id ] = member.info;
              if(settings.randomColor && member.info.color === undefined) {
                member.info.color = settings.templates.color(member.id);
              }
              html = settings.templates.userList(member.info);
              if(member.info.isAdmin) {
                $(html)
                  .prependTo($userList)
                ;
              }
              else {
                $(html)
                  .appendTo($userList)
                ;
              }
              if(settings.partingMessages) {
                $log
                  .append( settings.templates.joined(member.info) )
                ;
                module.message.scroll.test();
              }
              module.user.updateCount();
            }
          },

          // remove user from user list
          left: function(member) {
            users = $module.data('users');
            if(member !== undefined && member.id !== 'anonymous') {
              delete users[ member.id ];
              $module
                .data('users', users)
              ;
              $userList
                .find('[data-id='+ member.id + ']')
                  .remove()
              ;
              if(settings.partingMessages) {
                $log
                  .append( settings.templates.left(member.info) )
                ;
                module.message.scroll.test();
              }
              module.user.updateCount();
            }
          },

          list: {

            // receives list of members and generates user list
            create: function(members) {
              users = {};
              members.each(function(member) {
                if(member.id !== 'anonymous' && member.id !== 'undefined') {
                  if(settings.randomColor && member.info.color === undefined) {
                    member.info.color = settings.templates.color(member.id);
                  }
                  // sort list with admin first
                  html = (member.info.isAdmin)
                    ? settings.templates.userList(member.info) + html
                    : html + settings.templates.userList(member.info)
                  ;
                  users[ member.id ] = member.info;
                }
              });
              $module
                .data('users', users)
                .data('user', users[members.me.id] )
                .removeClass(className.loading)
              ;
              $userList
                .html(html)
              ;
              module.user.updateCount();
              $.proxy(settings.onJoin, $userList.children())();
            },

            // shows user list
            show: function() {
              $log
                .animate({
                  width: (module.width.log - module.width.userList)
                }, {
                  duration : settings.speed,
                  easing   : settings.easing,
                  complete : module.message.scroll.move
                })
              ;
            },

            // hides user list
            hide: function() {
              $log
                .stop()
                .animate({
                  width: (module.width.log)
                }, {
                  duration : settings.speed,
                  easing   : settings.easing,
                  complete : module.message.scroll.move
                })
              ;
            }

          }

        },

        message: {

          // handles scrolling of chat log
          scroll: {
            test: function() {
              height = $log.prop('scrollHeight') - $log.height();
              if( Math.abs($log.scrollTop() - height) < settings.scrollArea) {
                module.message.scroll.move();
              }
            },

            move: function() {
              height = $log.prop('scrollHeight') - $log.height();
              $log
                .scrollTop(height)
              ;
            }
          },

          // sends chat message
          send: function(message) {
            if( !module.utils.emptyString(message) ) {
              $.api({
                url    : settings.endpoint.message,
                method : 'POST',
                data   : {
                  'message': {
                    content   : message,
                    timestamp : new Date().getTime()
                  }
                }
              });
            }
          },

          // receives chat response and processes
          receive: function(response) {
            message      = response.data;
            users        = $module.data('users');
            loggedInUser = $module.data('user');
            if(users[ message.userID] !== undefined) {
              // logged in user's messages already pushed instantly
              if(loggedInUser === undefined || loggedInUser.id != message.userID) {
                message.user = users[ message.userID ];
                module.message.display(message);
              }
            }
          },

          // displays message in chat log
          display: function(message) {
            $log
              .append( settings.templates.message(message) )
            ;
            module.message.scroll.test();
            $.proxy(settings.onMessage, $log.children().last() )();
          }

        },

        expand: function() {
          $module
            .addClass(className.expand)
          ;
          $.proxy(settings.onExpand, $module )();
          module.refresh();
        },

        contract: function() {
          $module
            .removeClass(className.expand)
          ;
          $.proxy(settings.onContract, $module )();
          module.refresh();
        },

        event: {

          input: {

            keydown: function(event) {
              if(event.which == 13) {
                $messageButton
                  .addClass(className.down)
                ;
              }
            },

            keyup: function(event) {
              if(event.which == 13) {
                $messageButton
                  .removeClass(className.down)
                ;
                module.event.submit();
              }
            }

          },

          // handles message form submit
          submit: function() {
            var
              message      = $messageInput.val(),
              loggedInUser = $module.data('user')
            ;
            if(loggedInUser !== undefined && !module.utils.emptyString(message)) {
              module.message.send(message);
              // display immediately
              module.message.display({
                user: loggedInUser,
                text: message
              });
              module.message.scroll.move();
              $messageInput
                .val('')
              ;

            }
          },

          // handles button click on expand button
          toggleExpand: function() {
            if( !$module.hasClass(className.expand) ) {
              $expandButton
                .addClass(className.active)
              ;
              module.expand();
            }
            else {
              $expandButton
                .removeClass(className.active)
              ;
              module.contract();
            }
          },

          // handles button click on user list button
          toggleUserList: function() {
            if( !$log.is(':animated') ) {
              if( !$userListButton.hasClass(className.active) ) {
                $userListButton
                  .addClass(className.active)
                ;
                module.user.list.show();
              }
              else {
                $userListButton
                  .removeClass('active')
                ;
                module.user.list.hide();
              }
            }

          }
        },

        utils: {

          emptyString: function(string) {
            if(typeof string == 'string') {
              return (string.search(/\S/) == -1);
            }
            return false;
          }

        },

<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
      setting: function(name, value) {
        if(value !== undefined) {
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else {
            settings[name] = value;
          }
        }
        else {
          return settings[name];
        }
      },
      internal: function(name, value) {
<<<<<<< HEAD
        if(value !== undefined) {
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else {
            module[name] = value;
          }
=======
        if( $.isPlainObject(name) ) {
          $.extend(true, module, name);
        }
        else if(value !== undefined) {
          module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
        else {
          return module[name];
        }
      },
      debug: function() {
        if(settings.debug) {
          if(settings.performance) {
            module.performance.log(arguments);
          }
          else {
            module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
            module.debug.apply(console, arguments);
          }
        }
      },
      verbose: function() {
        if(settings.verbose && settings.debug) {
          if(settings.performance) {
            module.performance.log(arguments);
          }
          else {
            module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
            module.verbose.apply(console, arguments);
          }
        }
      },
      error: function() {
        module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
        module.error.apply(console, arguments);
      },
      performance: {
        log: function(message) {
          var
            currentTime,
            executionTime,
            previousTime
          ;
          if(settings.performance) {
            currentTime   = new Date().getTime();
            previousTime  = time || currentTime;
            executionTime = currentTime - previousTime;
            time          = currentTime;
            performance.push({
              'Element'        : element,
              'Name'           : message[0],
              'Arguments'      : [].slice.call(message, 1) || '',
              'Execution Time' : executionTime
            });
          }
          clearTimeout(module.performance.timer);
          module.performance.timer = setTimeout(module.performance.display, 100);
        },
        display: function() {
          var
            title = settings.name + ':',
            totalTime = 0
          ;
          time = false;
          clearTimeout(module.performance.timer);
          $.each(performance, function(index, data) {
            totalTime += data['Execution Time'];
          });
          title += ' ' + totalTime + 'ms';
          if(moduleSelector) {
            title += ' \'' + moduleSelector + '\'';
          }
<<<<<<< HEAD
          title += ' ' + '(' + $allDropdowns.size() + ')';
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
            console.groupCollapsed(title);
            if(console.table) {
              console.table(performance);
            }
            else {
              $.each(performance, function(index, data) {
                console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
              });
            }
            console.groupEnd();
          }
          performance = [];
        }
      },
      invoke: function(query, passedArguments, context) {
        var
          maxDepth,
          found
        ;
        passedArguments = passedArguments || queryArguments;
        context         = element         || context;
        if(typeof query == 'string' && instance !== undefined) {
          query    = query.split(/[\. ]/);
          maxDepth = query.length - 1;
          $.each(query, function(depth, value) {
            if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
              instance = instance[value];
            }
            else if( instance[value] !== undefined ) {
              found = instance[value];
            }
            else {
<<<<<<< HEAD
              module.error(error.method);
=======
              module.error(error.method, query);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
          });
        }
        if ( $.isFunction( found ) ) {
          return found.apply(context, passedArguments);
        }
        return found || false;
      }
    };

    if(methodInvoked) {
      if(instance === undefined) {
        module.initialize();
      }
      module.invoke(query);
    }
    else {
      if(instance !== undefined) {
        module.destroy();
      }
      module.initialize();
    }
  })
;

<<<<<<< HEAD
  return (invokedResponse)
    ? invokedResponse
=======
  return (returnedValue)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

  $.fn.chatroom.settings = {

    name            : 'Chat',
    debug           : false,
    namespace       : 'chat',

    channel         : 'present-chat',

    onJoin          : function(){},
    onMessage       : function(){},
    onExpand        : function(){},
    onContract      : function(){},

    customEvents    : {},

    partingMessages : false,
    userCount       : true,
    randomColor     : true,

    speed           : 300,
    easing          : 'easeOutQuint',

    // pixels from bottom of chat log that should trigger auto scroll to bottom
    scrollArea      : 9999,

    endpoint        : {
      message        : false,
      authentication : false
    },

    error: {
      method   : 'The method you called is not defined',
      endpoint : 'Please define a message and authentication endpoint.',
      key      : 'You must specify a pusher key and channel.',
      pusher   : 'You must include the Pusher library.'
    },

    className   : {
      expand  : 'expand',
      active  : 'active',
      hover   : 'hover',
      down    : 'down',
      loading : 'loading'
    },

    selector    : {
      userCount      : '.actions .message',
      userListButton : '.actions .list.button',
      expandButton   : '.actions .expand.button',
      room           : '.room',
      userList       : '.room .list',
      log            : '.room .log',
      message        : '.room .log .message',
      author         : '.room log .message .author',
      messageInput   : '.talk input',
      messageButton  : '.talk .send.button'
    },

    templates: {

      userCount: function(number) {
        return number + ' users in chat';
      },

      color: function(userID) {
        var
          colors = [
            '#000000',
            '#333333',
            '#666666',
            '#999999',
            '#CC9999',
            '#CC6666',
            '#CC3333',
            '#993333',
            '#663333',
            '#CC6633',
            '#CC9966',
            '#CC9933',
            '#999966',
            '#CCCC66',
            '#99CC66',
            '#669933',
            '#669966',
            '#33A3CC',
            '#336633',
            '#33CCCC',
            '#339999',
            '#336666',
            '#336699',
            '#6666CC',
            '#9966CC',
            '#333399',
            '#663366',
            '#996699',
            '#993366',
            '#CC6699'
          ]
        ;
        return colors[ Math.floor( Math.random() * colors.length) ];
      },

      message: function(message) {
        var
          html = ''
        ;
        if(message.user.isAdmin) {
          message.user.color = '#55356A';
          html += '<div class="admin message">';
          html += '<span class="quirky ui flag team"></span>';
        }
        /*
        else if(message.user.isPro) {
          html += '<div class="indent message">';
          html += '<span class="quirky ui flag pro"></span>';
        }
        */
        else {
          html += '<div class="message">';
        }
        html += '<p>';
        if(message.user.color !== undefined) {
          html += '<span class="author" style="color: ' + message.user.color + ';">' + message.user.name + '</span>: ';
        }
        else {
          html += '<span class="author">' + message.user.name + '</span>: ';
        }
        html += ''
          +   message.text
          + ' </p>'
          + '</div>'
        ;
        return html;
      },

      joined: function(member) {
        return (typeof member.name !== undefined)
          ? '<div class="status">' + member.name + ' has joined the chat.</div>'
          : false
        ;
      },
      left: function(member) {
        return (typeof member.name !== undefined)
          ? '<div class="status">' + member.name + ' has left the chat.</div>'
          : false
        ;
      },

      userList: function(member) {
        var
          html = ''
        ;
        if(member.isAdmin) {
          member.color = '#55356A';
        }
        html +=  ''
          + '<div class="user" data-id="' + member.id + '">'
          + ' <div class="image">'
          + '   <img src="' + member.avatarURL + '">'
          + ' </div>'
        ;
        if(member.color !== undefined) {
          html += ' <p><a href="/users/' + member.id + '" target="_blank" style="color: ' + member.color + ';">' + member.name + '</a></p>';
        }
        else {
          html += ' <p><a href="/users/' + member.id + '" target="_blank">' + member.name + '</a></p>';
        }
        html += '</div>';
        return html;
      }

    }

  };

})( jQuery, window , document );

/*
 * # Semantic - Checkbox
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.checkbox = function(parameters) {
  var
    $allModules    = $(this),
<<<<<<< HEAD

    settings       = $.extend(true, {}, $.fn.checkbox.settings, parameters),

    className      = settings.className,
    namespace      = settings.namespace,
    error          = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    moduleSelector = $allModules.selector || '',

    time           = new Date().getTime(),
    performance    = [],

    query          = arguments[0],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;

  $allModules
    .each(function() {
      var
<<<<<<< HEAD
=======
        settings        = $.extend(true, {}, $.fn.checkbox.settings, parameters),

        className       = settings.className,
        namespace       = settings.namespace,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $module         = $(this),
        $label          = $(this).next(settings.selector.label).first(),
        $input          = $(this).find(settings.selector.input),

        selector        = $module.selector || '',
        instance        = $module.data(moduleNamespace),

        element         = this,
        module
      ;

      module      = {

        initialize: function() {
          module.verbose('Initializing checkbox', settings);
          if(settings.context && selector !== '') {
            module.verbose('Adding delegated events');
            $(element, settings.context)
              .on(selector, 'click' + eventNamespace, module.toggle)
              .on(selector + ' + ' + settings.selector.label, 'click' + eventNamespace, module.toggle)
            ;
          }
          else {
            $module
              .on('click' + eventNamespace, module.toggle)
              .data(moduleNamespace, module)
            ;
            $label
              .on('click' + eventNamespace, module.toggle)
            ;
          }
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module');
          $module
            .off(eventNamespace)
            .removeData(moduleNamespace)
          ;
        },

        is: {
          radio: function() {
            return $module.hasClass(className.radio);
<<<<<<< HEAD
=======
          },
          enabled: function() {
            return $input.prop('checked') !== undefined && $input.prop('checked');
          },
          disabled: function() {
            return !module.is.enabled();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        can: {
          disable: function() {
            return (typeof settings.required === 'boolean')
              ? settings.required
              : !module.is.radio()
            ;
          }
        },

        enable: function() {
<<<<<<< HEAD
          module.debug('Enabling checkbox');
=======
          module.debug('Enabling checkbox', $input);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $input
            .prop('checked', true)
          ;
          $.proxy(settings.onChange, $input.get())();
          $.proxy(settings.onEnable, $input.get())();
        },

        disable: function() {
          module.debug('Disabling checkbox');
          $input
            .prop('checked', false)
          ;
          $.proxy(settings.onChange, $input.get())();
          $.proxy(settings.onDisable, $input.get())();
        },

        toggle: function(event) {
          module.verbose('Determining new checkbox state');
<<<<<<< HEAD
          if($input.prop('checked') === undefined || !$input.prop('checked')) {
            module.enable();
          }
          else if( module.can.disable() ) {
=======
          if( module.is.disabled() ) {
            module.enable();
          }
          else if( module.is.enabled() && module.can.disable() ) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.disable();
          }
        },
        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
<<<<<<< HEAD
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.checkbox.settings = {

  name        : 'Checkbox',
  namespace   : 'checkbox',

  verbose     : true,
  debug       : true,
  performance : true,

  // delegated event context
  context     : false,
  required    : 'auto',

  onChange    : function(){},
  onEnable    : function(){},
  onDisable   : function(){},

  error     : {
    method   : 'The method you called is not defined.'
  },

  selector : {
<<<<<<< HEAD
    input  : 'input[type=checkbox]',
=======
    input  : 'input[type=checkbox], input[type=radio]',
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    label  : 'label'
  },

  className : {
    radio  : 'radio'
  }

};

})( jQuery, window , document );

/*
 * # Semantic - Dimmer
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.dimmer = function(parameters) {
  var
    $allModules     = $(this),

<<<<<<< HEAD
    settings        = ( $.isPlainObject(parameters) )
      ? $.extend(true, {}, $.fn.dimmer.settings, parameters)
      : $.fn.dimmer.settings,

    selector        = settings.selector,
    namespace       = settings.namespace,
    className       = settings.className,
    error           = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,
    moduleSelector  = $allModules.selector || '',

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
<<<<<<< HEAD
    clickEvent      = ('ontouchstart' in document.documentElement)
      ? 'touchstart'
      : 'click',

    invokedResponse
=======

    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;

  $allModules
    .each(function() {
      var
<<<<<<< HEAD
=======
        settings        = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.dimmer.settings, parameters)
          : $.extend({}, $.fn.dimmer.settings),

        selector        = settings.selector,
        namespace       = settings.namespace,
        className       = settings.className,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,
        moduleSelector  = $allModules.selector || '',

        clickEvent      = ('ontouchstart' in document.documentElement)
          ? 'touchstart'
          : 'click',

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $module = $(this),
        $dimmer,
        $dimmable,

        element   = this,
        instance  = $module.data(moduleNamespace),
        module
      ;

      module = {

        preinitialize: function() {
          if( module.is.dimmer() ) {
            $dimmable = $module.parent();
            $dimmer   = $module;
          }
          else {
            $dimmable = $module;
            if( module.has.dimmer() ) {
              $dimmer = $dimmable.children(selector.dimmer).first();
            }
            else {
<<<<<<< HEAD
              module.create();
=======
              $dimmer = module.create();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
          }
        },

        initialize: function() {
          module.debug('Initializing dimmer', settings);
          if(settings.on == 'hover') {
            $dimmable
              .on('mouseenter' + eventNamespace, module.show)
              .on('mouseleave' + eventNamespace, module.hide)
            ;
          }
          else if(settings.on == 'click') {
            $dimmable
              .on(clickEvent + eventNamespace, module.toggle)
            ;
          }

          if( module.is.page() ) {
            module.debug('Setting as a page dimmer', $dimmable);
            module.set.pageDimmer();
          }

          if(settings.closable) {
            module.verbose('Adding dimmer close event', $dimmer);
            $dimmer
              .on(clickEvent + eventNamespace, module.event.click)
            ;
          }
          module.set.dimmable();
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, instance)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module', $dimmer);
<<<<<<< HEAD
=======
          $module
            .removeData(moduleNamespace)
          ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $dimmable
            .off(eventNamespace)
          ;
          $dimmer
            .off(eventNamespace)
          ;
        },

        event: {

          click: function(event) {
            module.verbose('Determining if event occured on dimmer', event);
            if( $dimmer.find(event.target).size() === 0 || $(event.target).is(selector.content) ) {
              module.hide();
              event.stopImmediatePropagation();
            }
          }

        },

        addContent: function(element) {
          var
<<<<<<< HEAD
            $content = $(element).detach()
          ;
          module.debug('Add content to dimmer', $content);
          if($content.parent()[0] !== $dimmer[0]) {
            $dimmer.append($content);
=======
            $content = $(element)
          ;
          module.debug('Add content to dimmer', $content);
          if($content.parent()[0] !== $dimmer[0]) {
            $content.detach().appendTo($dimmer);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        create: function() {
<<<<<<< HEAD
          $dimmer = $( settings.template.dimmer() );
          return $dimmer.appendTo($dimmable);
=======
          return $( settings.template.dimmer() ).appendTo($dimmable);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        animate: {
          show: function(callback) {
<<<<<<< HEAD
            callback = callback || function(){};
            module.set.dimmed();
            if($.fn.transition !== undefined) {
              $dimmer
                .transition(settings.transition + ' in', settings.duration, function() {
                  module.set.active();
                  callback();
=======
            callback = $.isFunction(callback)
              ? callback
              : function(){}
            ;
            module.set.dimmed();
            if(settings.useCSS && $.fn.transition !== undefined && $dimmer.transition('is supported')) {
              $dimmer
                .transition({
                  animation : settings.transition + ' in',
                  queue     : true,
                  duration  : module.get.duration(),
                  complete  : function() {
                    module.set.active();
                    callback();
                  }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                })
              ;
            }
            else {
              module.verbose('Showing dimmer animation with javascript');
              $dimmer
                .stop()
                .css({
                  opacity : 0,
                  width   : '100%',
                  height  : '100%'
                })
<<<<<<< HEAD
                .fadeTo(settings.duration, 1, function() {
=======
                .fadeTo(module.get.duration(), 1, function() {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                  $dimmer.removeAttr('style');
                  module.set.active();
                  callback();
                })
              ;
            }
          },
          hide: function(callback) {
<<<<<<< HEAD
            callback = callback || function(){};
            module.remove.dimmed();
            if($.fn.transition !== undefined) {
              module.verbose('Hiding dimmer with css');
              $dimmer
                .transition(settings.transition + ' out', settings.duration, function() {
                  module.remove.active();
                  callback();
=======
            callback = $.isFunction(callback)
              ? callback
              : function(){}
            ;
            if(settings.useCSS && $.fn.transition !== undefined && $dimmer.transition('is supported')) {
              module.verbose('Hiding dimmer with css');
              $dimmer
                .transition({
                  animation : settings.transition + ' out',
                  duration  : module.get.duration(),
                  queue     : true,
                  complete  : function() {
                    module.remove.dimmed();
                    module.remove.active();
                    callback();
                  }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                })
              ;
            }
            else {
              module.verbose('Hiding dimmer with javascript');
              $dimmer
                .stop()
<<<<<<< HEAD
                .fadeOut(settings.duration, function() {
                  $dimmer.removeAttr('style');
=======
                .fadeOut(module.get.duration(), function() {
                  $dimmer.removeAttr('style');
                  module.remove.dimmed();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                  module.remove.active();
                  callback();
                })
              ;
            }
          }
        },

        get: {
          dimmer: function() {
            return $dimmer;
<<<<<<< HEAD
=======
          },
          duration: function() {
            if(typeof settings.duration == 'object') {
              if( module.is.active() ) {
                return settings.duration.hide;
              }
              else {
                return settings.duration.show;
              }
            }
            return settings.duration;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        has: {
          dimmer: function() {
            return ( $module.children(selector.dimmer).size() > 0 );
          }
        },

        is: {
<<<<<<< HEAD
          dimmer: function() {
            return $module.is(selector.dimmer);
          },
          dimmable: function() {
            return $module.is(selector.dimmable);
          },
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          active: function() {
            return $dimmer.hasClass(className.active);
          },
          animating: function() {
            return ( $dimmer.is(':animated') || $dimmer.hasClass(className.transition) );
          },
<<<<<<< HEAD
          page: function () {
            return $dimmable.is('body');
          },
          enabled: function() {
            return !$dimmable.hasClass(className.disabled);
=======
          dimmer: function() {
            return $module.is(selector.dimmer);
          },
          dimmable: function() {
            return $module.is(selector.dimmable);
          },
          dimmed: function() {
            return $dimmable.hasClass(className.dimmed);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          },
          disabled: function() {
            return $dimmable.hasClass(className.disabled);
          },
<<<<<<< HEAD
=======
          enabled: function() {
            return !module.is.disabled();
          },
          page: function () {
            return $dimmable.is('body');
          },
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          pageDimmer: function() {
            return $dimmer.hasClass(className.pageDimmer);
          }
        },

        can: {
          show: function() {
            return !$dimmer.hasClass(className.disabled);
          }
        },

        set: {
          active: function() {
<<<<<<< HEAD
=======
            module.set.dimmed();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $dimmer
              .removeClass(className.transition)
              .addClass(className.active)
            ;
          },
          dimmable: function() {
            $dimmable.addClass(className.dimmable);
          },
          dimmed: function() {
            $dimmable.addClass(className.dimmed);
          },
          pageDimmer: function() {
            $dimmer.addClass(className.pageDimmer);
          },
          disabled: function() {
            $dimmer.addClass(className.disabled);
          }
        },

        remove: {
          active: function() {
            $dimmer
              .removeClass(className.transition)
              .removeClass(className.active)
            ;
          },
          dimmed: function() {
            $dimmable.removeClass(className.dimmed);
          },
          disabled: function() {
            $dimmer.removeClass(className.disabled);
          }
        },

        show: function(callback) {
<<<<<<< HEAD
          module.debug('Showing dimmer', $dimmer, settings);
          if( !(module.is.active() || module.is.animating() ) && module.is.enabled() ) {
=======
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          module.debug('Showing dimmer', $dimmer, settings);
          if( !module.is.active() && module.is.enabled() ) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.animate.show(callback);
            $.proxy(settings.onShow, element)();
            $.proxy(settings.onChange, element)();
          }
          else {
            module.debug('Dimmer is already shown or disabled');
          }
        },

        hide: function(callback) {
<<<<<<< HEAD
          if( module.is.active() && !module.is.animating() ) {
=======
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if( module.is.active() || module.is.animating() ) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.debug('Hiding dimmer', $dimmer);
            module.animate.hide(callback);
            $.proxy(settings.onHide, element)();
            $.proxy(settings.onChange, element)();
          }
          else {
            module.debug('Dimmer is not visible');
          }
        },

        toggle: function() {
          module.verbose('Toggling dimmer visibility', $dimmer);
<<<<<<< HEAD
          if( !module.is.active() ) {
=======
          if( !module.is.dimmed() ) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.show();
          }
          else {
            module.hide();
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };

      module.preinitialize();

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.dimmer.settings = {

  name        : 'Dimmer',
  namespace   : 'dimmer',

<<<<<<< HEAD
  verbose     : true,
  debug       : true,
  performance : true,

  transition  : 'fade',

  on          : false,
  closable    : true,
  duration    : 500,
=======
  debug       : true,
  verbose     : true,
  performance : true,

  transition  : 'fade',
  useCSS      : true,
  on          : false,
  closable    : true,

  duration    : {
    show : 500,
    hide : 500
  },
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

  onChange    : function(){},
  onShow      : function(){},
  onHide      : function(){},

  error   : {
    method   : 'The method you called is not defined.'
  },

  selector: {
    dimmable : '.ui.dimmable',
    dimmer   : '.ui.dimmer',
    content  : '.ui.dimmer > .content, .ui.dimmer > .content > .center'
  },

  template: {
    dimmer: function() {
     return $('<div />').attr('class', 'ui dimmer');
    }
  },

  className : {
    active     : 'active',
    dimmable   : 'ui dimmable',
    dimmed     : 'dimmed',
    disabled   : 'disabled',
    pageDimmer : 'page',
    hide       : 'hide',
    show       : 'show',
    transition : 'transition'
  }

};

})( jQuery, window , document );
/*
 * # Semantic - Dropdown
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
<<<<<<< HEAD

;(function ( $, window, document, undefined ) {

$.fn.dropdown = function(parameters) {
  var
    $allModules = $(this),
    $document   = $(document),

    settings    = ( $.isPlainObject(parameters) )
      ? $.extend(true, {}, $.fn.dropdown.settings, parameters)
      : $.fn.dropdown.settings,

    className         = settings.className,
    metadata          = settings.metadata,
    namespace         = settings.namespace,
    selector          = settings.selector,
    error             = settings.error,

    eventNamespace    = '.' + namespace,
    dropdownNamespace = 'module-' + namespace,
    dropdownSelector  = $allModules.selector || '',

    time              = new Date().getTime(),
    performance       = [],

    query             = arguments[0],
    methodInvoked     = (typeof query == 'string'),
    queryArguments    = [].slice.call(arguments, 1),
    invokedResponse
=======
;(function ( $, window, document, undefined ) {

$.fn.dropdown = function(parameters) {
    var
    $allModules    = $(this),
    $document      = $(document),

    moduleSelector = $allModules.selector || '',

    hasTouch       = ('ontouchstart' in document.documentElement),
    time           = new Date().getTime(),
    performance    = [],

    query          = arguments[0],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;

  $allModules
    .each(function() {
      var
<<<<<<< HEAD
        $module       = $(this),
        $item         = $module.find(selector.item),
        $text         = $module.find(selector.text),
        $input        = $module.find(selector.input),

        $menu         = $module.children(selector.menu),

        isTouchDevice = ('ontouchstart' in document.documentElement),

        element       = this,
        instance      = $module.data(dropdownNamespace),
=======
        settings          = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.dropdown.settings, parameters)
          : $.extend({}, $.fn.dropdown.settings),

        className       = settings.className,
        metadata        = settings.metadata,
        namespace       = settings.namespace,
        selector        = settings.selector,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

        $module         = $(this),
        $item           = $module.find(selector.item),
        $text           = $module.find(selector.text),
        $input          = $module.find(selector.input),

        $menu           = $module.children(selector.menu),


        element         = this,
        instance        = $module.data(moduleNamespace),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        module
      ;

      module = {

        initialize: function() {
          module.debug('Initializing dropdown', settings);
<<<<<<< HEAD
          if(isTouchDevice) {
            $module
              .on('touchstart' + eventNamespace, module.event.test.toggle)
            ;
          }
          else if(settings.on == 'click') {
            $module
              .on('click' + eventNamespace, module.event.test.toggle)
            ;
          }
          else if(settings.on == 'hover') {
            $module
              .on('mouseenter' + eventNamespace, module.delay.show)
              .on('mouseleave' + eventNamespace, module.delay.hide)
            ;
          }
          else {
            $module
              .on(settings.on + eventNamespace, module.toggle)
            ;
          }
          if(settings.action == 'updateForm') {
            module.set.selected();
          }
          $item
            .on('mouseenter' + eventNamespace, module.event.item.mouseenter)
            .on('mouseleave' + eventNamespace, module.event.item.mouseleave)
            .on(module.get.selectEvent() + eventNamespace, module.event.item.click)
          ;
=======

          module.save.defaults();
          module.set.selected();

          if(hasTouch) {
            module.bind.touchEvents();
          }
          module.bind.mouseEvents();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of dropdown', module);
<<<<<<< HEAD
          $module
            .data(dropdownNamespace, module)
=======
          instance = module;
          $module
            .data(moduleNamespace, module)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous dropdown for', $module);
          $item
            .off(eventNamespace)
          ;
          $module
            .off(eventNamespace)
<<<<<<< HEAD
            .removeData(dropdownNamespace)
          ;
        },

        event: {

          stopPropagation: function(event) {
            event.stopPropagation();
          },

          test: {
            toggle: function(event) {
              module.determine.intent(event, module.toggle);
              event.stopImmediatePropagation();
            },
            hide: function(event) {
              module.determine.intent(event, module.hide);
              event.stopPropagation();
=======
            .removeData(moduleNamespace)
          ;
        },

        bind: {
          touchEvents: function() {
            module.debug('Touch device detected binding touch events');
            $module
              .on('touchstart' + eventNamespace, module.event.test.toggle)
            ;
            $item
              .on('touchstart' + eventNamespace, module.event.item.mouseenter)
              .on('touchstart' + eventNamespace, module.event.item.click)
            ;
          },
          mouseEvents: function() {
            module.verbose('Mouse detected binding mouse events');
            if(settings.on == 'click') {
              $module
                .on('click' + eventNamespace, module.event.test.toggle)
              ;
            }
            else if(settings.on == 'hover') {
              $module
                .on('mouseenter' + eventNamespace, module.delay.show)
                .on('mouseleave' + eventNamespace, module.delay.hide)
              ;
            }
            else {
              $module
                .on(settings.on + eventNamespace, module.toggle)
              ;
            }
            $item
              .on('mouseenter' + eventNamespace, module.event.item.mouseenter)
              .on('mouseleave' + eventNamespace, module.event.item.mouseleave)
              .on('click'      + eventNamespace, module.event.item.click)
            ;
          },
          intent: function() {
            module.verbose('Binding hide intent event to document');
            if(hasTouch) {
              $document
                .on('touchstart' + eventNamespace, module.event.test.touch)
                .on('touchmove'  + eventNamespace, module.event.test.touch)
              ;
            }
            $document
              .on('click' + eventNamespace, module.event.test.hide)
            ;
          }
        },

        unbind: {
          intent: function() {
            module.verbose('Removing hide intent event from document');
            if(hasTouch) {
              $document
                .off('touchstart' + eventNamespace)
                .off('touchmove' + eventNamespace)
              ;
            }
            $document
              .off('click' + eventNamespace)
            ;
          }
        },

        event: {
          test: {
            toggle: function(event) {
              if( module.determine.intent(event, module.toggle) ) {
                event.preventDefault();
              }
            },
            touch: function(event) {
              module.determine.intent(event, function() {
                if(event.type == 'touchstart') {
                  module.timer = setTimeout(module.hide, settings.delay.touch);
                }
                else if(event.type == 'touchmove') {
                  clearTimeout(module.timer);
                }
              });
              event.stopPropagation();
            },
            hide: function(event) {
              module.determine.intent(event, module.hide);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
          },

          item: {

            mouseenter: function(event) {
              var
                $currentMenu = $(this).find(selector.menu),
                $otherMenus  = $(this).siblings(selector.item).children(selector.menu)
              ;
              if( $currentMenu.size() > 0 ) {
                clearTimeout(module.itemTimer);
                module.itemTimer = setTimeout(function() {
                  module.animate.hide(false, $otherMenus);
                  module.verbose('Showing sub-menu', $currentMenu);
                  module.animate.show(false,  $currentMenu);
                }, settings.delay.show * 2);
<<<<<<< HEAD
=======
                event.preventDefault();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              }
            },

            mouseleave: function(event) {
              var
                $currentMenu = $(this).find(selector.menu)
              ;
              if($currentMenu.size() > 0) {
                clearTimeout(module.itemTimer);
                module.itemTimer = setTimeout(function() {
                  module.verbose('Hiding sub-menu', $currentMenu);
                  module.animate.hide(false,  $currentMenu);
                }, settings.delay.hide);
              }
            },

            click: function (event) {
              var
                $choice = $(this),
<<<<<<< HEAD
                text    = $choice.data(metadata.text)  || $choice.text(),
                value   = $choice.data(metadata.value) || text.toLowerCase()
              ;
              if( $choice.find(selector.menu).size() === 0 ) {
                module.verbose('Adding active state to selected item');
                $item
                  .removeClass(className.active)
                ;
                $choice
                  .addClass(className.active)
                ;
                module.determine.selectAction(text, value);
                $.proxy(settings.onChange, element)(value, text);
                event.stopPropagation();
=======
                text    = ( $choice.data(metadata.text) !== undefined )
                  ? $choice.data(metadata.text)
                  : $choice.text(),
                value   = ( $choice.data(metadata.value) !== undefined)
                  ? $choice.data(metadata.value)
                  : text.toLowerCase(),
                callback = function() {
                  module.determine.selectAction(text, value);
                  $.proxy(settings.onChange, element)(value, text);
                }
              ;
              if( $choice.find(selector.menu).size() === 0 ) {
                if(event.type == 'touchstart') {
                  $choice.one('click', callback);
                }
                else {
                  callback();
                }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              }
            }

          },

          resetStyle: function() {
            $(this).removeAttr('style');
          }

        },

        determine: {
          selectAction: function(text, value) {
            module.verbose('Determining action', settings.action);
<<<<<<< HEAD
            if( $.isFunction( module[settings.action] ) ) {
              module.verbose('Triggering preset action', settings.action);
              module[ settings.action ](text, value);
            }
            else if( $.isFunction(settings.action) ) {
              module.verbose('Triggering user action', settings.action);
              settings.action(text, value);
            }
            else {
              module.error(error.action);
=======
            if( $.isFunction( module.action[settings.action] ) ) {
              module.verbose('Triggering preset action', settings.action, text, value);
              module.action[ settings.action ](text, value);
            }
            else if( $.isFunction(settings.action) ) {
              module.verbose('Triggering user action', settings.action, text, value);
              settings.action(text, value);
            }
            else {
              module.error(error.action, settings.action);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
          },
          intent: function(event, callback) {
            module.debug('Determining whether event occurred in dropdown', event.target);
            callback = callback || function(){};
            if( $(event.target).closest($menu).size() === 0 ) {
              module.verbose('Triggering event', callback);
              callback();
<<<<<<< HEAD
            }
            else {
              module.verbose('Event occurred in dropdown, canceling callback');
=======
              return true;
            }
            else {
              module.verbose('Event occurred in dropdown, canceling callback');
              return false;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
          }
        },

<<<<<<< HEAD
        bind: {
          intent: function() {
            module.verbose('Binding hide intent event to document');
            $document
              .on(module.get.selectEvent(), module.event.test.hide)
            ;
          }
        },

        unbind: {
          intent: function() {
            module.verbose('Removing hide intent event from document');
            $document
              .off(module.get.selectEvent())
            ;
          }
        },

        nothing: function() {},

        changeText: function(text, value) {
          module.set.text(text);
          module.hide();
        },

        updateForm: function(text, value) {
          module.set.text(text);
          module.set.value(value);
          module.hide();
        },

        get: {
          selectEvent: function() {
            return (isTouchDevice)
              ? 'touchstart'
              : 'click'
            ;
          },
=======
        action: {

          nothing: function() {},

          hide: function() {
            module.hide();
          },

          activate: function(text, value) {
            value = (value !== undefined)
              ? value
              : text
            ;
            module.set.selected(value);
            module.set.value(value);
            module.hide();
          },

          /* Deprecated */
          auto: function(text, value) {
            value = (value !== undefined)
              ? value
              : text
            ;
            module.set.selected(value);
            module.set.value(value);
            module.hide();
          },

          /* Deprecated */
          changeText: function(text, value) {
            value = (value !== undefined)
              ? value
              : text
            ;
            module.set.selected(value);
            module.hide();
          },

          /* Deprecated */
          updateForm: function(text, value) {
            value = (value !== undefined)
              ? value
              : text
            ;
            module.set.selected(value);
            module.set.value(value);
            module.hide();
          }

        },

        get: {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          text: function() {
            return $text.text();
          },
          value: function() {
<<<<<<< HEAD
            return $input.val();
          },
          item: function(value) {
            var
              $selectedItem
            ;
            value = value || $input.val();
            $item
              .each(function() {
                if( $(this).data(metadata.value) == value ) {
                  $selectedItem = $(this);
                }
              })
            ;
=======
            return ($input.size() > 0)
              ? $input.val()
              : $module.data(metadata.value)
            ;
          },
          item: function(value) {
            var
              $selectedItem = false
            ;
            value = (value !== undefined)
              ? value
              : ( module.get.value() !== undefined)
                ? module.get.value()
                : module.get.text()
            ;
            if(value !== undefined) {
              $item
                .each(function() {
                  var
                    $choice       = $(this),
                    optionText    = ( $choice.data(metadata.text) !== undefined )
                      ? $choice.data(metadata.text)
                      : $choice.text(),
                    optionValue   = ( $choice.data(metadata.value) !== undefined )
                      ? $choice.data(metadata.value)
                      : optionText.toLowerCase()
                  ;
                  if( optionValue == value ) {
                    $selectedItem = $(this);
                  }
                  else if( !$selectedItem && optionText == value ) {
                    $selectedItem = $(this);
                  }
                })
              ;
            }
            else {
              value = module.get.text();
            }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            return $selectedItem || false;
          }
        },

<<<<<<< HEAD
=======
        restore: {
          defaults: function() {
            module.restore.defaultText();
            module.restore.defaultValue();
          },
          defaultText: function() {
            var
              defaultText = $module.data(metadata.defaultText)
            ;
            module.debug('Restoring default text', defaultText);
            module.set.text(defaultText);
          },
          defaultValue: function() {
            var
              defaultValue = $module.data(metadata.defaultValue)
            ;
            if(defaultValue !== undefined) {
              module.debug('Restoring default value', defaultValue);
              module.set.selected(defaultValue);
              module.set.value(defaultValue);
            }
          }
        },

        save: {
          defaults: function() {
            module.save.defaultText();
            module.save.defaultValue();
          },
          defaultValue: function() {
            $module.data(metadata.defaultValue, module.get.value() );
          },
          defaultText: function() {
            $module.data(metadata.defaultText, $text.text() );
          }
        },

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        set: {
          text: function(text) {
            module.debug('Changing text', text, $text);
            $text.removeClass(className.placeholder);
            $text.text(text);
          },
          value: function(value) {
            module.debug('Adding selected value to hidden input', value, $input);
<<<<<<< HEAD
            $input.val(value);
=======
            if($input.size() > 0) {
              $input.val(value);
            }
            else {
              $module.data(metadata.value, value);
            }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          },
          active: function() {
            $module.addClass(className.active);
          },
          visible: function() {
            $module.addClass(className.visible);
          },
          selected: function(value) {
            var
              $selectedItem = module.get.item(value),
              selectedText
            ;
            if($selectedItem) {
              module.debug('Setting selected menu item to', $selectedItem);
<<<<<<< HEAD
              selectedText = $selectedItem.data(metadata.text) || $selectedItem.text();
=======
              selectedText = ($selectedItem.data(metadata.text) !== undefined)
                ? $selectedItem.data(metadata.text)
                : $selectedItem.text()
              ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              $item
                .removeClass(className.active)
              ;
              $selectedItem
                .addClass(className.active)
              ;
              module.set.text(selectedText);
            }
          }
        },

        remove: {
          active: function() {
            $module.removeClass(className.active);
          },
          visible: function() {
            $module.removeClass(className.visible);
          }
        },

        is: {
<<<<<<< HEAD
          visible: function($subMenu) {
            return ($subMenu)
              ? $subMenu.is(':animated, :visible')
              : $menu.is(':animated, :visible')
=======
          selection: function() {
            return $module.hasClass(className.selection);
          },
          animated: function($subMenu) {
            return ($subMenu)
              ? $subMenu.is(':animated') || $subMenu.transition('is animating')
              : $menu.is(':animated') || $menu.transition('is animating')
            ;
          },
          visible: function($subMenu) {
            return ($subMenu)
              ? $subMenu.is(':visible')
              : $menu.is(':visible')
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            ;
          },
          hidden: function($subMenu) {
            return ($subMenu)
<<<<<<< HEAD
              ? $subMenu.is(':not(:animated, :visible)')
              : $menu.is(':not(:animated, :visible)')
=======
              ? $subMenu.is(':not(:visible)')
              : $menu.is(':not(:visible)')
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            ;
          }
        },

        can: {
          click: function() {
<<<<<<< HEAD
            return (isTouchDevice || settings.on == 'click');
=======
            return (hasTouch || settings.on == 'click');
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          },
          show: function() {
            return !$module.hasClass(className.disabled);
          }
        },

        animate: {
          show: function(callback, $subMenu) {
            var
              $currentMenu = $subMenu || $menu
            ;
            callback = callback || function(){};
            if( module.is.hidden($currentMenu) ) {
              module.verbose('Doing menu show animation', $currentMenu);
              if(settings.transition == 'none') {
                callback();
              }
<<<<<<< HEAD
              else if($.fn.transition !== undefined) {
                $currentMenu.transition({
                  animation : settings.transition + ' in',
                  duration  : settings.duration,
                  complete  : callback,
                  queue     : false
                });
=======
              else if($.fn.transition !== undefined && $module.transition('is supported')) {
                $currentMenu
                  .transition({
                    animation : settings.transition + ' in',
                    duration  : settings.duration,
                    complete  : callback,
                    queue     : false
                  })
                ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              }
              else if(settings.transition == 'slide down') {
                $currentMenu
                  .hide()
                  .clearQueue()
                  .children()
                    .clearQueue()
                    .css('opacity', 0)
                    .delay(50)
                    .animate({
                      opacity : 1
                    }, settings.duration, 'easeOutQuad', module.event.resetStyle)
                    .end()
                  .slideDown(100, 'easeOutQuad', function() {
                    $.proxy(module.event.resetStyle, this)();
                    callback();
                  })
                ;
              }
              else if(settings.transition == 'fade') {
                $currentMenu
                  .hide()
                  .clearQueue()
                  .fadeIn(settings.duration, function() {
                    $.proxy(module.event.resetStyle, this)();
                    callback();
                  })
                ;
              }
              else {
<<<<<<< HEAD
                module.error(error.transition);
=======
                module.error(error.transition, settings.transition);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              }
            }
          },
          hide: function(callback, $subMenu) {
            var
              $currentMenu = $subMenu || $menu
            ;
            callback = callback || function(){};
            if(module.is.visible($currentMenu) ) {
              module.verbose('Doing menu hide animation', $currentMenu);
<<<<<<< HEAD
              if($.fn.transition !== undefined) {
                $currentMenu.transition({
                  animation : settings.transition + ' out',
                  duration  : settings.duration,
                  complete  : callback,
                  queue     : false
                });
=======
              if($.fn.transition !== undefined && $module.transition('is supported')) {
                $currentMenu
                  .transition({
                    animation : settings.transition + ' out',
                    duration  : settings.duration,
                    complete  : callback,
                    queue     : false
                  })
                ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              }
              else if(settings.transition == 'none') {
                callback();
              }
              else if(settings.transition == 'slide down') {
                $currentMenu
                  .show()
                  .clearQueue()
                  .children()
                    .clearQueue()
                    .css('opacity', 1)
                    .animate({
                      opacity : 0
                    }, 100, 'easeOutQuad', module.event.resetStyle)
                    .end()
                  .delay(50)
                  .slideUp(100, 'easeOutQuad', function() {
                    $.proxy(module.event.resetStyle, this)();
                    callback();
                  })
                ;
              }
              else if(settings.transition == 'fade') {
                $currentMenu
                  .show()
                  .clearQueue()
                  .fadeOut(150, function() {
                    $.proxy(module.event.resetStyle, this)();
                    callback();
                  })
                ;
              }
              else {
                module.error(error.transition);
              }
            }
          }
        },

        show: function() {
          module.debug('Checking if dropdown can show');
          if( module.is.hidden() ) {
            module.hideOthers();
            module.set.active();
<<<<<<< HEAD
            module.animate.show(module.set.visible);
            if( module.can.click() ) {
              module.bind.intent();
            }
=======
            module.animate.show(function() {
              if( module.can.click() ) {
                module.bind.intent();
              }
              module.set.visible();
            });
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $.proxy(settings.onShow, element)();
          }
        },

        hide: function() {
<<<<<<< HEAD
          if( module.is.visible() ) {
=======
          if( !module.is.animated() && module.is.visible() ) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.debug('Hiding dropdown');
            if( module.can.click() ) {
              module.unbind.intent();
            }
            module.remove.active();
            module.animate.hide(module.remove.visible);
            $.proxy(settings.onHide, element)();
          }
        },

        delay: {
          show: function() {
            module.verbose('Delaying show event to ensure user intent');
            clearTimeout(module.timer);
            module.timer = setTimeout(module.show, settings.delay.show);
          },
          hide: function() {
            module.verbose('Delaying hide event to ensure user intent');
            clearTimeout(module.timer);
            module.timer = setTimeout(module.hide, settings.delay.hide);
          }
        },

        hideOthers: function() {
          module.verbose('Finding other dropdowns to hide');
          $allModules
            .not($module)
              .has(selector.menu + ':visible')
              .dropdown('hide')
          ;
        },

        toggle: function() {
          module.verbose('Toggling menu visibility');
          if( module.is.hidden() ) {
            module.show();
          }
          else {
            module.hide();
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
<<<<<<< HEAD
            if(dropdownSelector) {
              title += ' \'' + dropdownSelector + '\'';
=======
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
            maxDepth,
            found
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
          if(typeof query == 'string' && instance !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
              }
              else {
                module.error(error.method);
=======
            object = instance,
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
          if(typeof query == 'string' && object !== undefined) {
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
                module.error(error.method, query);
                return false;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              }
            });
          }
          if ( $.isFunction( found ) ) {
<<<<<<< HEAD
            return found.apply(context, passedArguments);
          }
          return found || false;
=======
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
          }
          return found;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse)
    ? invokedResponse
=======
  return (returnedValue)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.dropdown.settings = {

  name        : 'Dropdown',
  namespace   : 'dropdown',

  verbose     : true,
  debug       : true,
  performance : true,

  on          : 'click',
<<<<<<< HEAD
  action      : 'hide',

  delay: {
    show: 200,
    hide: 300
=======
  action      : 'activate',

  delay: {
    show  : 200,
    hide  : 300,
    touch : 50
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  },

  transition : 'slide down',
  duration   : 250,

<<<<<<< HEAD
  onChange : function(){},
=======
  onChange : function(value, text){},
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  onShow   : function(){},
  onHide   : function(){},

  error   : {
    action    : 'You called a dropdown action that was not defined',
    method    : 'The method you called is not defined.',
    transition : 'The requested transition was not found'
  },

  metadata: {
<<<<<<< HEAD
    text  : 'text',
    value : 'value'
=======
    defaultText  : 'defaultText',
    defaultValue : 'defaultValue',
    text         : 'text',
    value        : 'value'
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  },

  selector : {
    menu  : '.menu',
    item  : '.menu > .item',
    text  : '> .text',
    input : '> input[type="hidden"]'
  },

  className : {
    active      : 'active',
    placeholder : 'default',
    disabled    : 'disabled',
<<<<<<< HEAD
    visible     : 'visible'
=======
    visible     : 'visible',
    selection   : 'selection'
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  }

};

<<<<<<< HEAD
=======
// Adds easing
$.extend( $.easing, {
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
});


<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
})( jQuery, window , document );
/*
 * # Semantic - Modal
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.modal = function(parameters) {
  var
    $allModules = $(this),
    $window     = $(window),
    $document   = $(document),

<<<<<<< HEAD
    settings    = ( $.isPlainObject(parameters) )
      ? $.extend(true, {}, $.fn.modal.settings, parameters)
      : $.fn.modal.settings,

    selector        = settings.selector,
    className       = settings.className,
    namespace       = settings.namespace,
    error           = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,
    moduleSelector  = $allModules.selector || '',

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),

<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;


  $allModules
    .each(function() {
      var
<<<<<<< HEAD
        $module      = $(this),
        $context     = $(settings.context),
        $otherModals = $allModules.not($module),
        $close       = $module.find(selector.close),

        $focusedElement,
=======
        settings    = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.modal.settings, parameters)
          : $.extend({}, $.fn.modal.settings),

        selector        = settings.selector,
        className       = settings.className,
        namespace       = settings.namespace,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,
        moduleSelector  = $allModules.selector || '',

        $module      = $(this),
        $context     = $(settings.context),
        $close       = $module.find(selector.close),

        $allModals,
        $otherModals,
        $focusedElement,
        $dimmable,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $dimmer,

        element      = this,
        instance     = $module.data(moduleNamespace),
        module
      ;

      module  = {

        initialize: function() {
          module.verbose('Initializing dimmer', $context);

<<<<<<< HEAD
          $dimmer = $context
            .dimmer('add content', $module)
            .dimmer('get dimmer')
          ;

=======
          if(typeof $.fn.dimmer === undefined) {
            module.error(error.dimmer);
            return;
          }
          $dimmable = $context
            .dimmer({
              closable : false,
              useCSS   : true,
              duration: {
                show     : settings.duration * 0.9,
                hide     : settings.duration * 1.1
              }
            })
          ;

          if(settings.detachable) {
            $dimmable.dimmer('add content', $module);
          }

          $dimmer = $dimmable
            .dimmer('get dimmer')
          ;

          $otherModals = $module.siblings(selector.modal);
          $allModals   = $otherModals.add($module);

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          module.verbose('Attaching close events', $close);
          $close
            .on('click' + eventNamespace, module.event.close)
          ;
          $window
<<<<<<< HEAD
            .on('resize', function() {
=======
            .on('resize' + eventNamespace, function() {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.event.debounce(module.refresh, 50);
            })
          ;
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of modal');
          instance = module;
          $module
            .data(moduleNamespace, instance)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous modal');
          $module
<<<<<<< HEAD
            .off(eventNamespace)
          ;
=======
            .removeData(moduleNamespace)
            .off(eventNamespace)
          ;
          $close
            .off(eventNamespace)
          ;
          $context
            .dimmer('destroy')
          ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        refresh: function() {
          module.remove.scrolling();
          module.cacheSizes();
          module.set.type();
          module.set.position();
        },

        attachEvents: function(selector, event) {
          var
            $toggle = $(selector)
          ;
          event = $.isFunction(module[event])
            ? module[event]
<<<<<<< HEAD
            : module.show
=======
            : module.toggle
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          ;
          if($toggle.size() > 0) {
            module.debug('Attaching modal events to element', selector, event);
            $toggle
              .off(eventNamespace)
              .on('click' + eventNamespace, event)
            ;
          }
          else {
            module.error(error.notFound);
          }
        },

        event: {
          close: function() {
<<<<<<< HEAD
            module.verbose('Close button pressed');
            $context.dimmer('hide');
=======
            module.verbose('Closing element pressed');
            if( $(this).is(selector.approve) ) {
              if($.proxy(settings.onApprove, element)() !== false) {
                module.hide();
              }
              else {
                module.verbose('Approve callback returned false cancelling hide');
              }
            }
            else if( $(this).is(selector.deny) ) {
              if($.proxy(settings.onDeny, element)() !== false) {
                module.hide();
              }
              else {
                module.verbose('Deny callback returned false cancelling hide');
              }
            }
            else {
              module.hide();
            }
          },
          click: function(event) {
            if( $(event.target).closest(selector.modal).size() === 0 ) {
              module.debug('Dimmer clicked, hiding all modals');
              if(settings.allowMultiple) {
                module.hide();
              }
              else {
                module.hideAll();
              }
              event.stopImmediatePropagation();
            }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          },
          debounce: function(method, delay) {
            clearTimeout(module.timer);
            module.timer = setTimeout(method, delay);
          },
          keyboard: function(event) {
            var
              keyCode   = event.which,
              escapeKey = 27
            ;
            if(keyCode == escapeKey) {
<<<<<<< HEAD
              module.debug('Escape key pressed hiding modal');
              $context.dimmer('hide');
=======
              if(settings.closable) {
                module.debug('Escape key pressed hiding modal');
                module.hide();
              }
              else {
                module.debug('Escape key pressed, but closable is set to false');
              }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              event.preventDefault();
            }
          },
          resize: function() {
<<<<<<< HEAD
            if( $context.dimmer('is active') ) {
=======
            if( $dimmable.dimmer('is active') ) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.refresh();
            }
          }
        },

        toggle: function() {
          if( module.is.active() ) {
            module.hide();
          }
          else {
            module.show();
          }
        },

<<<<<<< HEAD
        show: function() {
          module.showDimmer();
          module.cacheSizes();
          module.set.position();
          module.hideAll();
          if(settings.transition && $.fn.transition !== undefined) {
            $module
              .transition(settings.transition + ' in', settings.duration, function() {
                module.set.active();
                module.save.focus();
                module.set.type();
              })
            ;
          }
          else {
            $module
              .fadeIn(settings.duration, settings.easing, function() {
                module.set.active();
                module.save.focus();
                module.set.type();
              })
            ;
          }
          module.debug('Triggering dimmer');
          $.proxy(settings.onShow, element)();
        },

        showDimmer: function() {
          module.debug('Showing modal');
          module.set.dimmerSettings();
          $context.dimmer('show');
        },
        hideDimmer: function() {
          $context.dimmer('hide');
        },

        hide: function() {
          module.debug('Hiding modal');
          // remove keyboard detection
          $document
            .off('keyup.' + namespace)
          ;
          if(settings.transition && $.fn.transition !== undefined) {
=======
        show: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          module.showDimmer();
          module.showModal(callback);
        },

        showModal: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if( !module.is.active() ) {
            module.cacheSizes();
            module.set.position();
            module.set.type();

            if( $otherModals.filter(':visible').size() > 0 && !settings.allowMultiple) {
              module.debug('Other modals visible, queueing show animation');
              module.hideOthers(module.showModal);
            }
            else {
              if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
                module.debug('Showing modal with css animations');
                $module
                  .transition(settings.transition + ' in', settings.duration, function() {
                    module.set.active();
                    callback();
                  })
                ;
              }
              else {
                module.debug('Showing modal with javascript');
                $module
                  .fadeIn(settings.duration, settings.easing, function() {
                    module.set.active();
                    callback();
                  })
                ;
              }
              $.proxy(settings.onShow, element)();
            }
          }
          else {
            module.debug('Modal is already visible');
          }
        },

        showDimmer: function() {
          if( !$dimmable.dimmer('is active') ) {
            module.debug('Showing dimmer');
            $dimmable.dimmer('show');
          }
          else {
            module.debug('Dimmer already visible');
          }
        },

        hide: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if($allModals.filter(':visible').size() <= 1) {
            module.hideDimmer();
          }
          module.hideModal(callback);
        },

        hideDimmer: function() {
          if( !module.is.active() ) {
            module.debug('Dimmer is not visible cannot hide');
            return;
          }
          module.debug('Hiding dimmer');
          if(settings.closable) {
            $dimmer
              .off('click' + eventNamespace)
            ;
          }
          $dimmable.dimmer('hide', function() {
            $module
              .transition('reset')
            ;
            module.remove.active();
          });
        },

        hideModal: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if( !module.is.active() ) {
            module.debug('Cannot hide modal it is not active');
            return;
          }
          module.debug('Hiding modal');
          module.remove.keyboardShortcuts();
          if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $module
              .transition(settings.transition + ' out', settings.duration, function() {
                module.remove.active();
                module.restore.focus();
<<<<<<< HEAD
=======
                callback();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              })
            ;
          }
          else {
            $module
              .fadeOut(settings.duration, settings.easing, function() {
                module.remove.active();
                module.restore.focus();
<<<<<<< HEAD
=======
                callback();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              })
            ;
          }
          $.proxy(settings.onHide, element)();
        },

<<<<<<< HEAD
        hideAll: function() {
          $otherModals
            .filter(':visible')
            .modal('hide')
          ;
=======
        hideAll: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if( $allModals.is(':visible') ) {
            module.debug('Hiding all visible modals');
            module.hideDimmer();
            $allModals
              .filter(':visible')
                .modal('hide modal', callback)
            ;
          }
        },

        hideOthers: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          if( $otherModals.is(':visible') ) {
            module.debug('Hiding other modals');
            $otherModals
              .filter(':visible')
                .modal('hide modal', callback)
            ;
          }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        add: {
          keyboardShortcuts: function() {
            module.verbose('Adding keyboard shortcuts');
            $document
              .on('keyup' + eventNamespace, module.event.keyboard)
            ;
          }
        },

        save: {
          focus: function() {
            $focusedElement = $(document.activeElement).blur();
          }
        },

        restore: {
          focus: function() {
<<<<<<< HEAD
          $focusedElement.focus();
=======
            if($focusedElement && $focusedElement.size() > 0) {
              $focusedElement.focus();
            }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        remove: {
          active: function() {
            $module.removeClass(className.active);
          },
          keyboardShortcuts: function() {
            module.verbose('Removing keyboard shortcuts');
            $document
              .off('keyup' + eventNamespace)
            ;
          },
          scrolling: function() {
<<<<<<< HEAD
            $dimmer.removeClass(className.scrolling);
=======
            $dimmable.removeClass(className.scrolling);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $module.removeClass(className.scrolling);
          }
        },

        cacheSizes: function() {
          module.cache = {
            height        : $module.outerHeight() + settings.offset,
            contextHeight : (settings.context == 'body')
              ? $(window).height()
<<<<<<< HEAD
              : $context.height()
=======
              : $dimmable.height()
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          };
          module.debug('Caching modal and container sizes', module.cache);
        },

        can: {
          fit: function() {
            return (module.cache.height < module.cache.contextHeight);
          }
        },

        is: {
          active: function() {
            return $module.hasClass(className.active);
<<<<<<< HEAD
=======
          },
          modernBrowser: function() {
            // appName for IE11 reports 'Netscape' can no longer use
            return !(window.ActiveXObject || "ActiveXObject" in window);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        set: {
          active: function() {
<<<<<<< HEAD
            $module.addClass(className.active);
          },
          dimmerSettings: function() {
            module.debug('Setting dimmer settings', settings.closable);
            $context
              .dimmer('setting', 'closable', settings.closable)
              .dimmer('setting', 'duration', settings.duration)
              .dimmer('setting', 'onShow' , module.add.keyboardShortcuts)
              .dimmer('setting', 'onHide', function() {
                module.hide();
                module.remove.keyboardShortcuts();
              })
              .dimmer('destroy')
              .dimmer('initialize')
            ;
          },
          scrolling: function() {
            $dimmer.addClass(className.scrolling);
=======
            module.add.keyboardShortcuts();
            module.save.focus();
            $module
              .addClass(className.active)
            ;
            if(settings.closable) {
              $dimmer
                .off('click' + eventNamespace)
                .on('click' + eventNamespace, module.event.click)
              ;
            }
          },
          scrolling: function() {
            $dimmable.addClass(className.scrolling);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $module.addClass(className.scrolling);
          },
          type: function() {
            if(module.can.fit()) {
              module.verbose('Modal fits on screen');
              module.remove.scrolling();
            }
            else {
              module.verbose('Modal cannot fit on screen setting to scrolling');
              module.set.scrolling();
            }
          },
          position: function() {
            module.verbose('Centering modal on page', module.cache, module.cache.height / 2);
            if(module.can.fit()) {
              $module
                .css({
                  top: '',
                  marginTop: -(module.cache.height / 2)
                })
              ;
            }
            else {
              $module
                .css({
                  marginTop : '1em',
                  top       : $document.scrollTop()
                })
              ;
            }
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.modal.settings = {

<<<<<<< HEAD
  name        : 'Modal',
  namespace   : 'modal',
  verbose     : true,
  debug       : true,
  performance : true,

  closable    : true,
  context     : 'body',
  duration    : 500,
  easing      : 'easeOutExpo',
  offset      : 0,
  transition  : 'scale',

  onShow      : function(){},
  onHide      : function(){},

  selector    : {
    close : '.close, .actions .button'
  },
  error : {
    method : 'The method you called is not defined.'
=======
  name          : 'Modal',
  namespace     : 'modal',

  debug         : true,
  verbose       : true,
  performance   : true,

  allowMultiple : true,
  detachable    : true,
  closable      : true,
  context       : 'body',

  duration      : 500,
  easing        : 'easeOutExpo',
  offset        : 0,
  transition    : 'scale',

  onShow        : function(){},
  onHide        : function(){},
  onApprove     : function(){ return true; },
  onDeny        : function(){ return true; },

  selector    : {
    close    : '.close, .actions .button',
    approve  : '.actions .positive, .actions .approve, .actions .ok',
    deny     : '.actions .negative, .actions .deny, .actions .cancel',
    modal    : '.ui.modal'
  },
  error : {
    dimmer    : 'UI Dimmer, a required component is not included in this page',
    method    : 'The method you called is not defined.'
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  },
  className : {
    active    : 'active',
    scrolling : 'scrolling'
<<<<<<< HEAD
  },
=======
  }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
};


})( jQuery, window , document );
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
/*
 * # Semantic - Nag
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

$.fn.nag = function(parameters) {
  var
    $allModules     = $(this),
<<<<<<< HEAD
    settings        = $.extend(true, {}, $.fn.nag.settings, parameters),

    className       = settings.className,
    selector        = settings.selector,
    error           = settings.error,
    namespace       = settings.namespace,

    eventNamespace  = '.' + namespace,
    moduleNamespace = namespace + '-module',
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $(this)
    .each(function() {
      var
<<<<<<< HEAD
=======
        settings        = $.extend(true, {}, $.fn.nag.settings, parameters),

        className       = settings.className,
        selector        = settings.selector,
        error           = settings.error,
        namespace       = settings.namespace,

        eventNamespace  = '.' + namespace,
        moduleNamespace = namespace + '-module',

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $module         = $(this),

        $close          = $module.find(selector.close),
        $context        = $(settings.context),


        element         = this,
        instance        = $module.data(moduleNamespace),

        moduleOffset,
        moduleHeight,

        contextWidth,
        contextHeight,
        contextOffset,

        yOffset,
        yPosition,

        timer,
        module,

        requestAnimationFrame = window.requestAnimationFrame
          || window.mozRequestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.msRequestAnimationFrame
          || function(callback) { setTimeout(callback, 0); }
      ;
      module = {

        initialize: function() {
          module.verbose('Initializing element');
          // calculate module offset once
          moduleOffset  = $module.offset();
          moduleHeight  = $module.outerHeight();
          contextWidth  = $context.outerWidth();
          contextHeight = $context.outerHeight();
          contextOffset = $context.offset();

          $module
            .data(moduleNamespace, module)
          ;
          $close
            .on('click' + eventNamespace, module.dismiss)
          ;
          // lets avoid javascript if we dont need to reposition
          if(settings.context == window && settings.position == 'fixed') {
            $module
              .addClass(className.fixed)
            ;
          }
          if(settings.sticky) {
            module.verbose('Adding scroll events');
            // retrigger on scroll for absolute
            if(settings.position == 'absolute') {
              $context
                .on('scroll' + eventNamespace, module.event.scroll)
                .on('resize' + eventNamespace, module.event.scroll)
              ;
            }
            // fixed is always relative to window
            else {
              $(window)
                .on('scroll' + eventNamespace, module.event.scroll)
                .on('resize' + eventNamespace, module.event.scroll)
              ;
            }
            // fire once to position on init
            $.proxy(module.event.scroll, this)();
          }

          if(settings.displayTime > 0) {
            setTimeout(module.hide, settings.displayTime);
          }
          if(module.should.show()) {
            if( !$module.is(':visible') ) {
              module.show();
            }
          }
          else {
            module.hide();
          }
        },

        destroy: function() {
          module.verbose('Destroying instance');
          $module
            .removeData(moduleNamespace)
            .off(eventNamespace)
          ;
          if(settings.sticky) {
            $context
              .off(eventNamespace)
            ;
          }
        },

        refresh: function() {
          module.debug('Refreshing cached calculations');
          moduleOffset  = $module.offset();
          moduleHeight  = $module.outerHeight();
          contextWidth  = $context.outerWidth();
          contextHeight = $context.outerHeight();
          contextOffset = $context.offset();
        },

        show: function() {
          module.debug('Showing nag', settings.animation.show);
          if(settings.animation.show == 'fade') {
            $module
              .fadeIn(settings.duration, settings.easing)
            ;
          }
          else {
            $module
              .slideDown(settings.duration, settings.easing)
            ;
          }
        },

        hide: function() {
          module.debug('Showing nag', settings.animation.hide);
          if(settings.animation.show == 'fade') {
            $module
              .fadeIn(settings.duration, settings.easing)
            ;
          }
          else {
            $module
              .slideUp(settings.duration, settings.easing)
            ;
          }
        },

        onHide: function() {
          module.debug('Removing nag', settings.animation.hide);
          $module.remove();
          if (settings.onHide) {
            settings.onHide();
          }
        },

        stick: function() {
          module.refresh();

          if(settings.position == 'fixed') {
            var
              windowScroll = $(window).prop('pageYOffset') || $(window).scrollTop(),
              fixedOffset = ( $module.hasClass(className.bottom) )
                ? contextOffset.top + (contextHeight - moduleHeight) - windowScroll
                : contextOffset.top - windowScroll
            ;
            $module
              .css({
                position : 'fixed',
                top      : fixedOffset,
                left     : contextOffset.left,
                width    : contextWidth - settings.scrollBarWidth
              })
            ;
          }
          else {
            $module
              .css({
                top : yPosition
              })
            ;
          }
        },
        unStick: function() {
          $module
            .css({
              top : ''
            })
          ;
        },
        dismiss: function(event) {
          if(settings.storageMethod) {
            module.storage.set(settings.storedKey, settings.storedValue);
          }
          module.hide();
          event.stopImmediatePropagation();
          event.preventDefault();
        },

        should: {
          show: function() {
            if(settings.persist) {
              module.debug('Persistent nag is set, can show nag');
              return true;
            }
            if(module.storage.get(settings.storedKey) != settings.storedValue) {
              module.debug('Stored value is not set, can show nag', module.storage.get(settings.storedKey));
              return true;
            }
            module.debug('Stored value is set, cannot show nag', module.storage.get(settings.storedKey));
            return false;
          },
          stick: function() {
            yOffset   = $context.prop('pageYOffset') || $context.scrollTop();
            yPosition = ( $module.hasClass(className.bottom) )
              ? (contextHeight - $module.outerHeight() ) + yOffset
              : yOffset
            ;
            // absolute position calculated when y offset met
            if(yPosition > moduleOffset.top) {
              return true;
            }
            else if(settings.position == 'fixed') {
              return true;
            }
            return false;
          }
        },

        storage: {

          set: function(key, value) {
            module.debug('Setting stored value', key, value, settings.storageMethod);
            if(settings.storageMethod == 'local' && window.store !== undefined) {
              window.store.set(key, value);
            }
            // store by cookie
            else if($.cookie !== undefined) {
              $.cookie(key, value);
            }
            else {
              module.error(error.noStorage);
            }
          },
          get: function(key) {
            module.debug('Getting stored value', key, settings.storageMethod);
            if(settings.storageMethod == 'local' && window.store !== undefined) {
              return window.store.get(key);
            }
            // get by cookie
            else if($.cookie !== undefined) {
              return $.cookie(key);
            }
            else {
              module.error(error.noStorage);
            }
          }

        },

        event: {
          scroll: function() {
            if(timer !== undefined) {
              clearTimeout(timer);
            }
            timer = setTimeout(function() {
              if(module.should.stick() ) {
                requestAnimationFrame(module.stick);
              }
              else {
                module.unStick();
              }
            }, settings.lag);
          }
        },
        setting: function(name, value) {
<<<<<<< HEAD
          module.debug('Changing setting', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
          module.debug('Changing internal', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }

    })
  ;
<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.nag.settings = {

  name        : 'Nag',

  verbose     : true,
  debug       : true,
  performance : true,

  namespace   : 'Nag',

  // allows cookie to be overriden
  persist     : false,

  // set to zero to manually dismiss, otherwise hides on its own
  displayTime : 0,

  animation   : {
    show: 'slide',
    hide: 'slide'
  },

  // method of stickyness
  position       : 'fixed',
  scrollBarWidth : 18,

  // type of storage to use
  storageMethod  : 'cookie',

  // value to store in dismissed localstorage/cookie
  storedKey      : 'nag',
  storedValue    : 'dismiss',

  // need to calculate stickyness on scroll
  sticky         : false,

  // how often to check scroll event
  lag            : 0,

  // context for scroll event
  context        : window,

  error: {
    noStorage  : 'Neither $.cookie or store is defined. A storage solution is required for storing state',
    method    : 'The method you called is not defined.'
  },

  className     : {
    bottom      : 'bottom',
    fixed       : 'fixed'
  },

  selector      : {
    close: '.icon.close'
  },

  speed         : 500,
  easing        : 'easeOutQuad',

  onHide: function() {}

};

})( jQuery, window , document );

/*
 * # Semantic - Popup
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

$.fn.popup = function(parameters) {
  var
    $allModules     = $(this),
<<<<<<< HEAD

    settings        = ( $.isPlainObject(parameters) )
      ? $.extend(true, {}, $.fn.popup.settings, parameters)
      : $.fn.popup.settings,
=======
    $document       = $(document),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),

<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $allModules
    .each(function() {
      var
<<<<<<< HEAD
        $module         = $(this),

        $window         = $(window),
        $offsetParent   = $module.offsetParent(),
        $popup          = (settings.inline)
          ? $module.next(settings.selector.popup)
=======
        settings        = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.popup.settings, parameters)
          : $.extend({}, $.fn.popup.settings),

        selector        = settings.selector,
        className       = settings.className,
        error           = settings.error,
        metadata        = settings.metadata,
        namespace       = settings.namespace,

        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = 'module-' + namespace,

        $module         = $(this),
        $context        = $(settings.context),
        $target         = (settings.target)
          ? $(settings.target)
          : $module,

        $window         = $(window),

        $offsetParent   = (settings.inline)
          ? $target.offsetParent()
          : $window,
        $popup          = (settings.inline)
          ? $target.next(settings.selector.popup)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          : $window.children(settings.selector.popup).last(),

        searchDepth     = 0,

<<<<<<< HEAD
        eventNamespace  = '.' + settings.namespace,
        moduleNamespace = settings.namespace + '-module',

        selector        = settings.selector,
        className       = settings.className,
        error           = settings.error,
        metadata        = settings.metadata,
        namespace       = settings.namespace,

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        element         = this,
        instance        = $module.data(moduleNamespace),
        module
      ;

      module = {

        // binds events
        initialize: function() {
          module.debug('Initializing module', $module);
<<<<<<< HEAD
          if(settings.on == 'hover') {
            $module
              .on('mouseenter' + eventNamespace, module.event.mouseenter)
              .on('mouseleave' + eventNamespace, module.event.mouseleave)
=======
          if(settings.on == 'click') {
            $module
              .on('click', module.toggle)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            ;
          }
          else {
            $module
<<<<<<< HEAD
              .on(settings.on + '' + eventNamespace, module.event[settings.on])
            ;
          }
=======
              .on(module.get.startEvent() + eventNamespace, module.event.start)
              .on(module.get.endEvent() + eventNamespace, module.event.end)
            ;
          }
          if(settings.target) {
            module.debug('Target set to element', $target);
          }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $window
            .on('resize' + eventNamespace, module.event.resize)
          ;
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, instance)
          ;
        },

        refresh: function() {
<<<<<<< HEAD
          $popup        = (settings.inline)
            ? $module.next(selector.popup)
            : $window.children(selector.popup).last()
          ;
          $offsetParent = $module.offsetParent();
=======
          if(settings.inline) {
            $popup = $target.next(selector.popup);
            $offsetParent = $target.offsetParent();
          }
          else {
            $popup = $window.children(selector.popup).last();
          }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        destroy: function() {
          module.debug('Destroying previous module');
<<<<<<< HEAD
=======
          $window
            .off(eventNamespace)
          ;
          $popup
            .remove()
          ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $module
            .off(eventNamespace)
            .removeData(moduleNamespace)
          ;
        },

        event: {
<<<<<<< HEAD
          mouseenter:  function(event) {
            var element = this;
            module.timer = setTimeout(function() {
              $.proxy(module.toggle, element)();
              if( $(element).hasClass(className.visible) ) {
                event.stopPropagation();
              }
            }, settings.delay);
          },
          mouseleave:  function() {
            clearTimeout(module.timer);
            if( $module.is(':visible') ) {
              module.hide();
            }
          },
          click: function(event) {
            $.proxy(module.toggle, this)();
            if( $(this).hasClass(className.visible) ) {
              event.stopPropagation();
            }
          },
          resize: function() {
            if( $popup.is(':visible') ) {
              module.position();
=======
          start:  function(event) {
            module.timer = setTimeout(function() {
              if( module.is.hidden() ) {
                module.show();
              }
            }, settings.delay);
          },
          end:  function() {
            clearTimeout(module.timer);
            if( module.is.visible() ) {
              module.hide();
            }
          },
          resize: function() {
            if( module.is.visible() ) {
              module.set.position();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
          }
        },

        // generates popup html from metadata
        create: function() {
          module.debug('Creating pop-up html');
          var
            html      = $module.data(metadata.html)      || settings.html,
            variation = $module.data(metadata.variation) || settings.variation,
            title     = $module.data(metadata.title)     || settings.title,
            content   = $module.data(metadata.content)   || $module.attr('title') || settings.content
          ;
          if(html || content || title) {
            if(!html) {
              html = settings.template({
                title   : title,
                content : content
              });
            }
            $popup = $('<div/>')
              .addClass(className.popup)
              .addClass(variation)
              .html(html)
            ;
            if(settings.inline) {
<<<<<<< HEAD
              module.verbose('Inserting popup element inline');
=======
              module.verbose('Inserting popup element inline', $popup);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              $popup
                .insertAfter($module)
              ;
            }
            else {
<<<<<<< HEAD
              module.verbose('Appending popup element to body');
              $popup
                .appendTo( $('body') )
              ;
            }
            $.proxy(settings.onInit, $popup)();
=======
              module.verbose('Appending popup element to body', $popup);
              $popup
                .appendTo( $context )
              ;
            }
            $.proxy(settings.onCreate, $popup)();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            module.error(error.content);
          }
        },

<<<<<<< HEAD
        remove: function() {
          module.debug('Removing popup');
          $popup
            .remove()
          ;
        },

        get: {
          offstagePosition: function() {
            var
              boundary  = {
                top    : $(window).scrollTop(),
=======
        // determines popup state
        toggle: function() {
          module.debug('Toggling pop-up');
          if( module.is.hidden() ) {
            module.debug('Popup is hidden, showing pop-up');
            module.unbind.close();
            module.hideAll();
            module.show();
          }
          else {
            module.debug('Popup is visible, hiding pop-up');
            module.hide();
          }
        },

        show: function(callback) {
          callback = callback || function(){};
          module.debug('Showing pop-up', settings.transition);
          if(!settings.preserve) {
            module.refresh();
          }
          if( !module.exists() ) {
            module.create();
          }
          module.save.conditions();
          module.set.position();
          module.animate.show(callback);
        },


        hide: function(callback) {
          callback = callback || function(){};
          $module
            .removeClass(className.visible)
          ;
          module.restore.conditions();
          module.unbind.close();
          if( module.is.visible() ) {
            module.animate.hide(callback);
          }
        },

        hideAll: function() {
          $(selector.popup)
            .filter(':visible')
              .popup('hide')
          ;
        },

        hideGracefully: function(event) {
          // don't close on clicks inside popup
          if(event && $(event.target).closest(selector.popup).size() === 0) {
            module.debug('Click occurred outside popup hiding popup');
            module.hide();
          }
          else {
            module.debug('Click was inside popup, keeping popup open');
          }
        },

        exists: function() {
          if(settings.inline) {
            return ( $popup.size() !== 0 );
          }
          else {
            return ( $popup.parent($context).size() );
          }
        },

        remove: function() {
          module.debug('Removing popup');
          $popup
            .remove()
          ;
        },

        save: {
          conditions: function() {
            module.cache = {
              title: $module.attr('title')
            };
            if (module.cache.title) {
              $module.removeAttr('title');
            }
            module.verbose('Saving original attributes', module.cache.title);
          }
        },
        restore: {
          conditions: function() {
            if(module.cache && module.cache.title) {
              $module.attr('title', module.cache.title);
            }
            module.verbose('Restoring original attributes', module.cache.title);
            return true;
          }
        },
        animate: {
          show: function(callback) {
            callback = callback || function(){};
            $module
              .addClass(className.visible)
            ;
            if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
              $popup
                .transition(settings.transition + ' in', settings.duration, function() {
                  module.bind.close();
                  $.proxy(callback, element)();
                })
              ;
            }
            else {
              $popup
                .stop()
                .fadeIn(settings.duration, settings.easing, function() {
                  module.bind.close();
                  $.proxy(callback, element)();
                })
              ;
            }
            $.proxy(settings.onShow, element)();
          },
          hide: function(callback) {
            callback = callback || function(){};
            module.debug('Hiding pop-up');
            if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
              $popup
                .transition(settings.transition + ' out', settings.duration, function() {
                  module.reset();
                  callback();
                })
              ;
            }
            else {
              $popup
                .stop()
                .fadeOut(settings.duration, settings.easing, function() {
                  module.reset();
                  callback();
                })
              ;
            }
            $.proxy(settings.onHide, element)();
          }
        },

        get: {
          startEvent: function() {
            if(settings.on == 'hover') {
              return 'mouseenter';
            }
            else if(settings.on == 'focus') {
              return 'focus';
            }
          },
          endEvent: function() {
            if(settings.on == 'hover') {
              return 'mouseleave';
            }
            else if(settings.on == 'focus') {
              return 'blur';
            }
          },
          offstagePosition: function() {
            var
              boundary  = {
                top    : $(window).scrollTop(),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                bottom : $(window).scrollTop() + $(window).height(),
                left   : 0,
                right  : $(window).width()
              },
              popup     = {
                width    : $popup.width(),
                height   : $popup.outerHeight(),
                position : $popup.offset()
              },
              offstage  = {},
              offstagePositions = []
            ;
            if(popup.position) {
              offstage = {
                top    : (popup.position.top < boundary.top),
                bottom : (popup.position.top + popup.height > boundary.bottom),
                right  : (popup.position.left + popup.width > boundary.right),
                left   : (popup.position.left < boundary.left)
              };
            }
<<<<<<< HEAD
=======
            module.verbose('Checking if outside viewable area', popup.position);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            // return only boundaries that have been surpassed
            $.each(offstage, function(direction, isOffstage) {
              if(isOffstage) {
                offstagePositions.push(direction);
              }
            });
            return (offstagePositions.length > 0)
              ? offstagePositions.join(' ')
              : false
            ;
          },
          nextPosition: function(position) {
            switch(position) {
              case 'top left':
                position = 'bottom left';
              break;
              case 'bottom left':
                position = 'top right';
              break;
              case 'top right':
                position = 'bottom right';
              break;
              case 'bottom right':
                position = 'top center';
              break;
              case 'top center':
                position = 'bottom center';
              break;
              case 'bottom center':
                position = 'right center';
              break;
              case 'right center':
                position = 'left center';
              break;
              case 'left center':
                position = 'top center';
              break;
            }
            return position;
          }
        },

<<<<<<< HEAD
        // determines popup state
        toggle: function() {
          $module = $(this);
          module.debug('Toggling pop-up');
          // refresh state of module
          module.refresh();
          if( !$module.hasClass(className.visible) ) {
            if(settings.on == 'click') {
              module.hideAll();
            }
            module.show();
          }
          else {
            module.hide();
          }
        },

        position: function(position, arrowOffset) {
          var
            windowWidth  = $(window).width(),
            windowHeight = $(window).height(),
            width        = $module.outerWidth(),
            height       = $module.outerHeight(),
            popupWidth   = $popup.width(),
            popupHeight  = $popup.outerHeight(),

            offset       = (settings.inline)
              ? $module.position()
              : $module.offset(),
            parentWidth  = (settings.inline)
              ? $offsetParent.outerWidth()
              : $window.outerWidth(),
            parentHeight = (settings.inline)
              ? $offsetParent.outerHeight()
              : $window.outerHeight(),

            positioning,
            offstagePosition
          ;
          position    = position    || $module.data(metadata.position)    || settings.position;
          arrowOffset = arrowOffset || $module.data(metadata.arrowOffset) || settings.arrowOffset;
          module.debug('Calculating offset for position', position);
          switch(position) {
            case 'top left':
              positioning = {
                top    : 'auto',
                bottom :  parentHeight - offset.top + settings.distanceAway,
                left   : offset.left + arrowOffset
              };
            break;
            case 'top center':
              positioning = {
                bottom :  parentHeight - offset.top + settings.distanceAway,
                left   : offset.left + (width / 2) - (popupWidth / 2) + arrowOffset,
                top    : 'auto',
                right  : 'auto'
              };
            break;
            case 'top right':
              positioning = {
                bottom :  parentHeight - offset.top + settings.distanceAway,
                right  :  parentWidth - offset.left - width - arrowOffset,
                top    : 'auto',
                left   : 'auto'
              };
            break;
            case 'left center':
              positioning = {
                top    :  offset.top + (height / 2) - (popupHeight / 2),
                right  : parentWidth - offset.left + settings.distanceAway - arrowOffset,
                left   : 'auto',
                bottom : 'auto'
              };
            break;
            case 'right center':
              positioning = {
                top    :  offset.top + (height / 2) - (popupHeight / 2),
                left   : offset.left + width + settings.distanceAway + arrowOffset,
                bottom : 'auto',
                right  : 'auto'
              };
            break;
            case 'bottom left':
              positioning = {
                top    :  offset.top + height + settings.distanceAway,
                left   : offset.left + arrowOffset,
                bottom : 'auto',
                right  : 'auto'
              };
            break;
            case 'bottom center':
              positioning = {
                top    :  offset.top + height + settings.distanceAway,
                left   : offset.left + (width / 2) - (popupWidth / 2) + arrowOffset,
                bottom : 'auto',
                right  : 'auto'
              };
            break;
            case 'bottom right':
              positioning = {
                top    :  offset.top + height + settings.distanceAway,
                right  : parentWidth - offset.left - width - arrowOffset,
                left   : 'auto',
                bottom : 'auto'
              };
            break;
          }
          // true width on popup, avoid rounding error
          $.extend(positioning, {
            width: $popup.width() + 1
          });
          // tentatively place on stage
          $popup
            .removeAttr('style')
            .removeClass('top right bottom left center')
            .css(positioning)
            .addClass(position)
            .addClass(className.loading)
          ;
          // check if is offstage
          offstagePosition = module.get.offstagePosition();
          // recursively find new positioning
          if(offstagePosition) {
            module.debug('Element is outside boundaries ', offstagePosition);
            if(searchDepth < settings.maxSearchDepth) {
              position = module.get.nextPosition(position);
              searchDepth++;
              module.debug('Trying new position: ', position);
              return module.position(position);
            }
            else {
              module.error(error.recursion);
              searchDepth = 0;
              return false;
            }
          }
          else {
            module.debug('Position is on stage', position);
            searchDepth = 0;
            return true;
          }
        },

        show: function() {
          module.debug('Showing pop-up', settings.transition);
          if($popup.size() === 0) {
            module.create();
          }
          module.position();
          $module
            .addClass(className.visible)
          ;
          $popup
            .removeClass(className.loading)
          ;
          if(settings.transition && $.fn.transition !== undefined) {
            $popup
              .transition(settings.transition + ' in', settings.duration)
            ;
          }
          else {
            $popup
              .stop()
              .fadeIn(settings.duration, settings.easing)
            ;
          }
          if(settings.on == 'click' && settings.clicktoClose) {
            module.debug('Binding popup close event');
            $(document)
              .on('click.' + namespace, module.gracefully.hide)
            ;
          }
          $.proxy(settings.onShow, $popup)();
        },

        hideAll: function() {
          $(selector.popup)
            .filter(':visible')
              .popup('hide')
          ;
        },

        hide: function() {
          $module
            .removeClass(className.visible)
          ;
          if($popup.is(':visible') ) {
            module.debug('Hiding pop-up');
            if(settings.transition && $.fn.transition !== undefined) {
              $popup
                .transition(settings.transition + ' out', settings.duration)
              ;
            }
            else {
              $popup
                .stop()
                .fadeOut(settings.duration, settings.easing)
              ;
            }
          }
          if(settings.on == 'click' && settings.clicktoClose) {
            $(document)
              .off('click.' + namespace)
            ;
          }
          $.proxy(settings.onHide, $popup)();
          if(!settings.inline) {
            module.remove();
          }
        },

        gracefully: {
          hide: function(event) {
            // don't close on clicks inside popup
            if( $(event.target).closest(selector.popup).size() === 0) {
              module.hide();
            }
=======
        set: {
          position: function(position, arrowOffset) {
            var
              windowWidth  = $(window).width(),
              windowHeight = $(window).height(),

              width        = $target.outerWidth(),
              height       = $target.outerHeight(),

              popupWidth   = $popup.width(),
              popupHeight  = $popup.outerHeight(),

              parentWidth  = $offsetParent.outerWidth(),
              parentHeight = $offsetParent.outerHeight(),

              distanceAway = settings.distanceAway,

              offset       = (settings.inline)
                ? $target.position()
                : $target.offset(),

              positioning,
              offstagePosition
            ;
            position    = position    || $module.data(metadata.position)    || settings.position;
            arrowOffset = arrowOffset || $module.data(metadata.offset)      || settings.offset;
            // adjust for margin when inline
            if(settings.inline) {
              if(position == 'left center' || position == 'right center') {
                arrowOffset  += parseInt( window.getComputedStyle(element).getPropertyValue('margin-top'), 10);
                distanceAway += -parseInt( window.getComputedStyle(element).getPropertyValue('margin-left'), 10);
              }
              else {
                arrowOffset  += parseInt( window.getComputedStyle(element).getPropertyValue('margin-left'), 10);
                distanceAway += parseInt( window.getComputedStyle(element).getPropertyValue('margin-top'), 10);
              }
            }
            module.debug('Calculating offset for position', position);
            switch(position) {
              case 'top left':
                positioning = {
                  bottom :  parentHeight - offset.top + distanceAway,
                  right  :  parentWidth - offset.left - arrowOffset,
                  top    : 'auto',
                  left   : 'auto'
                };
              break;
              case 'top center':
                positioning = {
                  bottom :  parentHeight - offset.top + distanceAway,
                  left   : offset.left + (width / 2) - (popupWidth / 2) + arrowOffset,
                  top    : 'auto',
                  right  : 'auto'
                };
              break;
              case 'top right':
                positioning = {
                  top    : 'auto',
                  bottom :  parentHeight - offset.top + distanceAway,
                  left   : offset.left + width + arrowOffset,
                  right  : 'auto'
                };
              break;
              case 'left center':
                positioning = {
                  top    :  offset.top + (height / 2) - (popupHeight / 2) + arrowOffset,
                  right  : parentWidth - offset.left + distanceAway,
                  left   : 'auto',
                  bottom : 'auto'
                };
              break;
              case 'right center':
                positioning = {
                  top    :  offset.top + (height / 2) - (popupHeight / 2) + arrowOffset,
                  left   : offset.left + width + distanceAway,
                  bottom : 'auto',
                  right  : 'auto'
                };
              break;
              case 'bottom left':
                positioning = {
                  top    :  offset.top + height + distanceAway,
                  right  : parentWidth - offset.left - arrowOffset,
                  left   : 'auto',
                  bottom : 'auto'
                };
              break;
              case 'bottom center':
                positioning = {
                  top    :  offset.top + height + distanceAway,
                  left   : offset.left + (width / 2) - (popupWidth / 2) + arrowOffset,
                  bottom : 'auto',
                  right  : 'auto'
                };
              break;
              case 'bottom right':
                positioning = {
                  top    :  offset.top + height + distanceAway,
                  left   : offset.left + width + arrowOffset,
                  bottom : 'auto',
                  right  : 'auto'
                };
              break;
            }
            // tentatively place on stage
            $popup
              .css(positioning)
              .removeClass(className.position)
              .addClass(position)
              .addClass(className.loading)
            ;
            // check if is offstage
            offstagePosition = module.get.offstagePosition();

            // recursively find new positioning
            if(offstagePosition) {
              module.debug('Element is outside boundaries', offstagePosition);
              if(searchDepth < settings.maxSearchDepth) {
                position = module.get.nextPosition(position);
                searchDepth++;
                module.debug('Trying new position', position);
                return module.set.position(position);
              }
              else {
                module.error(error.recursion);
                searchDepth = 0;
                module.reset();
                $popup.removeClass(className.loading);
                return false;
              }
            }
            else {
              module.debug('Position is on stage', position);
              searchDepth = 0;
              $popup.removeClass(className.loading);
              return true;
            }
          }

        },

        bind: {
          close:function() {
            if(settings.on == 'click' && settings.closable) {
              module.verbose('Binding popup close event to document');
              $document
                .on('click' + eventNamespace, function(event) {
                  module.verbose('Pop-up clickaway intent detected');
                  $.proxy(module.hideGracefully, this)(event);
                })
              ;
            }
          }
        },

        unbind: {
          close: function() {
            if(settings.on == 'click' && settings.closable) {
              module.verbose('Removing close event from document');
              $document
                .off('click' + eventNamespace)
              ;
            }
          }
        },

        is: {
          animating: function() {
            return ( $popup.is(':animated') || $popup.hasClass(className.animating) );
          },
          visible: function() {
            return $popup.is(':visible');
          },
          hidden: function() {
            return !module.is.visible();
          }
        },

        reset: function() {
          $popup
            .attr('style', '')
            .removeAttr('style')
          ;
          if(!settings.preserve) {
            module.remove();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.popup.settings = {

  name           : 'Popup',
  debug          : true,
  verbose        : true,
  performance    : true,
  namespace      : 'popup',

<<<<<<< HEAD
  onInit         : function(){},
=======
  onCreate       : function(){},
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  onShow         : function(){},
  onHide         : function(){},

  variation      : '',
  content        : false,
  html           : false,
  title          : false,

  on             : 'hover',
<<<<<<< HEAD
  clicktoClose   : true,

  position       : 'top center',
  delay          : 150,
  inline         : true,

  duration       : 150,
=======
  target         : false,
  closable       : true,

  context        : 'body',
  position       : 'top center',
  delay          : 150,
  inline         : false,
  preserve       : false,

  duration       : 250,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  easing         : 'easeOutQuint',
  transition     : 'scale',

  distanceAway   : 0,
<<<<<<< HEAD
  arrowOffset    : 0,
=======
  offset         : 0,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  maxSearchDepth : 10,

  error: {
    content   : 'Your popup has no content specified',
    method    : 'The method you called is not defined.',
    recursion : 'Popup attempted to reposition element to fit, but could not find an adequate position.'
  },

  metadata: {
<<<<<<< HEAD
    arrowOffset : 'arrowOffset',
    content     : 'content',
    html        : 'html',
    position    : 'position',
    title       : 'title',
    variation   : 'variation'
  },

  className   : {
    popup       : 'ui popup',
    visible     : 'visible',
    loading     : 'loading'
=======
    content   : 'content',
    html      : 'html',
    offset    : 'offset',
    position  : 'position',
    title     : 'title',
    variation : 'variation'
  },

  className   : {
    animating   : 'animating',
    loading     : 'loading',
    popup       : 'ui popup',
    position    : 'top left center bottom right',
    visible     : 'visible'
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  },

  selector    : {
    popup    : '.ui.popup'
  },

  template: function(text) {
    var html = '';
    if(typeof text !== undefined) {
      if(typeof text.title !== undefined && text.title) {
        html += '<div class="header">' + text.title + '</div class="header">';
      }
      if(typeof text.content !== undefined && text.content) {
        html += '<div class="content">' + text.content + '</div>';
      }
    }
    return html;
  }

};

})( jQuery, window , document );

/*
 * # Semantic - Rating
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

$.fn.rating = function(parameters) {
  var
<<<<<<< HEAD
    $allModules     = $(this),
    moduleSelector  = $allModules.selector || '',

    settings        = $.extend(true, {}, $.fn.rating.settings, parameters),

    namespace       = settings.namespace,
    className       = settings.className,
    metadata        = settings.metadata,
    selector        = settings.selector,
    error           = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,
=======
    $allModules     = $(this),
    moduleSelector  = $allModules.selector || '',
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $allModules
    .each(function() {
      var
<<<<<<< HEAD
        $module  = $(this),
        $icon    = $module.find(selector.icon),

        element  = this,
        instance = $module.data(moduleNamespace),
=======
        settings        = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.rating.settings, parameters)
          : $.extend({}, $.fn.rating.settings),

        namespace       = settings.namespace,
        className       = settings.className,
        metadata        = settings.metadata,
        selector        = settings.selector,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

        element         = this,
        instance        = $(this).data(moduleNamespace),

        $module         = $(this),
        $icon           = $module.find(selector.icon),

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        module
      ;

      module = {

        initialize: function() {
          module.verbose('Initializing rating module', settings);

          if(settings.interactive) {
            module.enable();
          }
          else {
            module.disable();
          }

          if(settings.initialRating) {
            module.debug('Setting initial rating');
            module.setRating(settings.initialRating);
          }
          if( $module.data(metadata.rating) ) {
            module.debug('Rating found in metadata');
            module.setRating( $module.data(metadata.rating) );
          }
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Instantiating module', settings);
<<<<<<< HEAD
=======
          instance = module;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
<<<<<<< HEAD
=======
          module.verbose('Destroying previous instance', instance);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $module
            .removeData(moduleNamespace)
          ;
          $icon
            .off(eventNamespace)
          ;
        },

        event: {
          mouseenter: function() {
            var
              $activeIcon = $(this)
            ;
            $activeIcon
              .nextAll()
                .removeClass(className.hover)
            ;
            $module
              .addClass(className.hover)
            ;
            $activeIcon
              .addClass(className.hover)
                .prevAll()
                .addClass(className.hover)
            ;
          },
          mouseleave: function() {
            $module
              .removeClass(className.hover)
            ;
            $icon
              .removeClass(className.hover)
            ;
          },
          click: function() {
            var
              $activeIcon   = $(this),
              currentRating = module.getRating(),
              rating        = $icon.index($activeIcon) + 1
            ;
            if(settings.clearable && currentRating == rating) {
              module.clearRating();
            }
            else {
              module.setRating( rating );
            }
          }
        },

        clearRating: function() {
          module.debug('Clearing current rating');
          module.setRating(0);
        },

        getRating: function() {
          var
            currentRating = $icon.filter('.' + className.active).size()
          ;
          module.verbose('Current rating retrieved', currentRating);
          return currentRating;
        },

        enable: function() {
          module.debug('Setting rating to interactive mode');
          $icon
            .on('mouseenter' + eventNamespace, module.event.mouseenter)
            .on('mouseleave' + eventNamespace, module.event.mouseleave)
            .on('click' + eventNamespace, module.event.click)
          ;
          $module
<<<<<<< HEAD
            .addClass(className.active)
=======
            .removeClass(className.disabled)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          ;
        },

        disable: function() {
          module.debug('Setting rating to read-only mode');
          $icon
            .off(eventNamespace)
          ;
          $module
<<<<<<< HEAD
            .removeClass(className.active)
=======
            .addClass(className.disabled)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          ;
        },

        setRating: function(rating) {
          var
            ratingIndex = (rating - 1 >= 0)
              ? (rating - 1)
              : 0,
            $activeIcon = $icon.eq(ratingIndex)
          ;
          $module
            .removeClass(className.hover)
          ;
          $icon
            .removeClass(className.hover)
            .removeClass(className.active)
          ;
          if(rating > 0) {
            module.verbose('Setting current rating to', rating);
            $activeIcon
              .addClass(className.active)
                .prevAll()
                .addClass(className.active)
            ;
          }
          $.proxy(settings.onRate, element)(rating);
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
<<<<<<< HEAD
=======
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.rating.settings = {

  name          : 'Rating',
  namespace     : 'rating',

  verbose       : true,
  debug         : true,
  performance   : true,

  initialRating : 0,
  interactive   : true,
  clearable     : false,

  onRate        : function(rating){},

  error       : {
    method : 'The method you called is not defined'
  },

  metadata: {
    rating: 'rating'
  },

  className : {
<<<<<<< HEAD
    active  : 'active',
    hover   : 'hover',
    loading : 'loading'
=======
    active   : 'active',
    disabled : 'disabled',
    hover    : 'hover',
    loading  : 'loading'
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  },

  selector  : {
    icon : '.icon'
  }

};

})( jQuery, window , document );

/*
 * # Semantic - Search
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ($, window, document, undefined) {

$.fn.search = function(source, parameters) {
  var
    $allModules     = $(this),
<<<<<<< HEAD
    settings        = $.extend(true, {}, $.fn.search.settings, parameters),


    className       = settings.className,
    selector        = settings.selector,
    error           = settings.error,
    namespace       = settings.namespace,

    eventNamespace  = '.' + namespace,
    moduleNamespace = namespace + '-module',
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $(this)
    .each(function() {
      var
<<<<<<< HEAD
        $module       = $(this),
        $prompt       = $module.find(selector.prompt),
        $searchButton = $module.find(selector.searchButton),
        $results      = $module.find(selector.results),
        $result       = $module.find(selector.result),
        $category     = $module.find(selector.category),

        element       = this,
        instance      = $module.data(moduleNamespace),
=======
        settings        = $.extend(true, {}, $.fn.search.settings, parameters),

        className       = settings.className,
        selector        = settings.selector,
        error           = settings.error,
        namespace       = settings.namespace,

        eventNamespace  = '.' + namespace,
        moduleNamespace = namespace + '-module',

        $module         = $(this),
        $prompt         = $module.find(selector.prompt),
        $searchButton   = $module.find(selector.searchButton),
        $results        = $module.find(selector.results),
        $result         = $module.find(selector.result),
        $category       = $module.find(selector.category),

        element         = this,
        instance        = $module.data(moduleNamespace),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

        module
      ;
      module = {

        initialize: function() {
          module.verbose('Initializing module');
          var
            prompt = $prompt[0],
            inputEvent   = (prompt.oninput !== undefined)
              ? 'input'
              : (prompt.onpropertychange !== undefined)
                ? 'propertychange'
                : 'keyup'
          ;
          // attach events
          $prompt
            .on('focus' + eventNamespace, module.event.focus)
            .on('blur' + eventNamespace, module.event.blur)
            .on('keydown' + eventNamespace, module.handleKeyboard)
          ;
          if(settings.automatic) {
            $prompt
              .on(inputEvent + eventNamespace, module.search.throttle)
            ;
          }
          $searchButton
            .on('click' + eventNamespace, module.search.query)
          ;
          $results
            .on('click' + eventNamespace, selector.result, module.results.select)
          ;
          module.instantiate();
        },
        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },
        destroy: function() {
          module.verbose('Destroying instance');
          $module
            .removeData(moduleNamespace)
          ;
        },
        event: {
          focus: function() {
            $module
              .addClass(className.focus)
            ;
            module.results.show();
          },
          blur: function() {
            module.search.cancel();
            $module
              .removeClass(className.focus)
            ;
            module.results.hide();
          }
        },
        handleKeyboard: function(event) {
          var
            // force latest jq dom
            $result       = $module.find(selector.result),
            $category     = $module.find(selector.category),
            keyCode       = event.which,
            keys          = {
              backspace : 8,
              enter     : 13,
              escape    : 27,
              upArrow   : 38,
              downArrow : 40
            },
            activeClass  = className.active,
            currentIndex = $result.index( $result.filter('.' + activeClass) ),
            resultSize   = $result.size(),
            newIndex
          ;
          // search shortcuts
          if(keyCode == keys.escape) {
            module.verbose('Escape key pressed, blurring search field');
            $prompt
              .trigger('blur')
            ;
          }
          // result shortcuts
          if($results.filter(':visible').size() > 0) {
            if(keyCode == keys.enter) {
              module.verbose('Enter key pressed, selecting active result');
              if( $result.filter('.' + activeClass).exists() ) {
                $.proxy(module.results.select, $result.filter('.' + activeClass) )();
                event.preventDefault();
                return false;
              }
            }
            else if(keyCode == keys.upArrow) {
              module.verbose('Up key pressed, changing active result');
              newIndex = (currentIndex - 1 < 0)
                ? currentIndex
                : currentIndex - 1
              ;
              $category
                .removeClass(activeClass)
              ;
              $result
                .removeClass(activeClass)
                .eq(newIndex)
                  .addClass(activeClass)
                  .closest($category)
                    .addClass(activeClass)
              ;
              event.preventDefault();
            }
            else if(keyCode == keys.downArrow) {
              module.verbose('Down key pressed, changing active result');
              newIndex = (currentIndex + 1 >= resultSize)
                ? currentIndex
                : currentIndex + 1
              ;
              $category
                .removeClass(activeClass)
              ;
              $result
                .removeClass(activeClass)
                .eq(newIndex)
                  .addClass(activeClass)
                  .closest($category)
                    .addClass(activeClass)
              ;
              event.preventDefault();
            }
          }
          else {
            // query shortcuts
            if(keyCode == keys.enter) {
              module.verbose('Enter key pressed, executing query');
              module.search.query();
              $searchButton
                .addClass(className.down)
              ;
              $prompt
                .one('keyup', function(){
                  $searchButton
                    .removeClass(className.down)
                  ;
                })
              ;
            }
          }
        },
        search: {
          cancel: function() {
            var
              xhr = $module.data('xhr') || false
            ;
            if( xhr && xhr.state() != 'resolved') {
              module.debug('Cancelling last search');
              xhr.abort();
            }
          },
          throttle: function() {
            var
              searchTerm    = $prompt.val(),
              numCharacters = searchTerm.length
            ;
            clearTimeout(module.timer);
            if(numCharacters >= settings.minCharacters)  {
              module.timer = setTimeout(module.search.query, settings.searchThrottle);
            }
            else {
              module.results.hide();
            }
          },
          query: function() {
            var
              searchTerm = $prompt.val(),
              cachedHTML = module.search.cache.read(searchTerm)
            ;
            if(cachedHTML) {
              module.debug("Reading result for '" + searchTerm + "' from cache");
              module.results.add(cachedHTML);
            }
            else {
              module.debug("Querying for '" + searchTerm + "'");
              if(typeof source == 'object') {
                module.search.local(searchTerm);
              }
              else {
                module.search.remote(searchTerm);
              }
              $.proxy(settings.onSearchQuery, $module)(searchTerm);
            }
          },
          local: function(searchTerm) {
            var
              results   = [],
              fullTextResults = [],
              searchFields    = $.isArray(settings.searchFields)
                ? settings.searchFields
                : [settings.searchFields],

              searchRegExp   = new RegExp('(?:\s|^)' + searchTerm, 'i'),
              fullTextRegExp = new RegExp(searchTerm, 'i'),
              searchHTML
            ;
            $module
              .addClass(className.loading)
            ;
            // iterate through search fields in array order
            $.each(searchFields, function(index, field) {
              $.each(source, function(label, thing) {
                if(typeof thing[field] == 'string' && ($.inArray(thing, results) == -1) && ($.inArray(thing, fullTextResults) == -1) ) {
                  if( searchRegExp.test( thing[field] ) ) {
                    results.push(thing);
                  }
                  else if( fullTextRegExp.test( thing[field] ) ) {
                    fullTextResults.push(thing);
                  }
                }
              });
            });
            searchHTML = module.results.generate({
              results: $.merge(results, fullTextResults)
            });
            $module
              .removeClass(className.loading)
            ;
            module.search.cache.write(searchTerm, searchHTML);
            module.results.add(searchHTML);
          },
          remote: function(searchTerm) {
            var
              apiSettings = {
                stateContext  : $module,
                url           : source,
                urlData: { query: searchTerm },
                success       : function(response) {
                  searchHTML = module.results.generate(response);
                  module.search.cache.write(searchTerm, searchHTML);
                  module.results.add(searchHTML);
                },
                failure      : module.error
              },
              searchHTML
            ;
            module.search.cancel();
            module.debug('Executing search');
            $.extend(true, apiSettings, settings.apiSettings);
            $.api(apiSettings);
          },

          cache: {
            read: function(name) {
              var
                cache = $module.data('cache')
              ;
              return (settings.cache && (typeof cache == 'object') && (cache[name] !== undefined) )
                ? cache[name]
                : false
              ;
            },
            write: function(name, value) {
              var
                cache = ($module.data('cache') !== undefined)
                  ? $module.data('cache')
                  : {}
              ;
              cache[name] = value;
              $module
                .data('cache', cache)
              ;
            }
          }
        },

        results: {
          generate: function(response) {
            module.debug('Generating html from response', response);
            var
              template = settings.templates[settings.type],
              html     = ''
            ;
            if(($.isPlainObject(response.results) && !$.isEmptyObject(response.results)) || ($.isArray(response.results) && response.results.length > 0) ) {
              if(settings.maxResults > 0) {
                response.results = $.makeArray(response.results).slice(0, settings.maxResults);
              }
              if(response.results.length > 0) {
                if($.isFunction(template)) {
                  html = template(response);
                }
                else {
                  module.error(error.noTemplate, false);
                }
              }
            }
            else {
              html = module.message(error.noResults, 'empty');
            }
            $.proxy(settings.onResults, $module)(response);
            return html;
          },
          add: function(html) {
            if(settings.onResultsAdd == 'default' || $.proxy(settings.onResultsAdd, $results)(html) == 'default') {
              $results
                .html(html)
              ;
            }
            module.results.show();
          },
          show: function() {
            if( ($results.filter(':visible').size() === 0) && ($prompt.filter(':focus').size() > 0) && $results.html() !== '') {
              $results
                .stop()
                .fadeIn(200)
              ;
              $.proxy(settings.onResultsOpen, $results)();
            }
          },
          hide: function() {
            if($results.filter(':visible').size() > 0) {
              $results
                .stop()
                .fadeOut(200)
              ;
              $.proxy(settings.onResultsClose, $results)();
            }
          },
          select: function(event) {
            module.debug('Search result selected');
            var
              $result = $(this),
              $title  = $result.find('.title'),
              title   = $title.html()
            ;
            if(settings.onSelect == 'default' || $.proxy(settings.onSelect, this)(event) == 'default') {
              var
                $link  = $result.find('a[href]').eq(0),
                href   = $link.attr('href') || false,
                target = $link.attr('target') || false
              ;
              module.results.hide();
              $prompt
                .val(title)
              ;
              if(href) {
                if(target == '_blank' || event.ctrlKey) {
                  window.open(href);
                }
                else {
                  window.location.href = (href);
                }
              }
            }
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          module.debug('Changing setting', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          module.debug('Changing internal', name, value);
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }

    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.search.settings = {

  name           : 'Search Module',
  namespace      : 'search',

  debug          : true,
  verbose        : true,
  performance    : true,

  // onSelect default action is defined in module
  onSelect       : 'default',
  onResultsAdd   : 'default',

  onSearchQuery  : function(){},
  onResults      : function(response){},

  onResultsOpen  : function(){},
  onResultsClose : function(){},

  automatic      : 'true',
  type           : 'simple',
  minCharacters  : 3,
  searchThrottle : 300,
  maxResults     : 7,
  cache          : true,

  searchFields    : [
    'title',
    'description'
  ],

  // api config
  apiSettings: {

  },

  className: {
    active  : 'active',
    down    : 'down',
    focus   : 'focus',
    empty   : 'empty',
    loading : 'loading'
  },

  error : {
    noResults   : 'Your search returned no results',
    logging     : 'Error in debug logging, exiting.',
    noTemplate  : 'A valid template name was not specified.',
    serverError : 'There was an issue with querying the server.',
    method      : 'The method you called is not defined.'
  },

  selector : {
    prompt       : '.prompt',
    searchButton : '.search.button',
    results      : '.results',
    category     : '.category',
    result       : '.result'
  },

  templates: {
    message: function(message, type) {
      var
        html = ''
      ;
      if(message !== undefined && type !== undefined) {
        html +=  ''
          + '<div class="message ' + type +'">'
        ;
        // message type
        if(type == 'empty') {
          html += ''
            + '<div class="header">No Results</div class="header">'
            + '<div class="description">' + message + '</div class="description">'
          ;
        }
        else {
          html += ' <div class="description">' + message + '</div>';
        }
        html += '</div>';
      }
      return html;
    },
    categories: function(response) {
      var
        html = ''
      ;
      if(response.results !== undefined) {
        // each category
        $.each(response.results, function(index, category) {
          if(category.results !== undefined && category.results.length > 0) {
            html  += ''
              + '<div class="category">'
              + '<div class="name">' + category.name + '</div>'
            ;
            // each item inside category
            $.each(category.results, function(index, result) {
              html  += '<div class="result">';
              html  += '<a href="' + result.url + '"></a>';
              if(result.image !== undefined) {
                html+= ''
                  + '<div class="image">'
                  + ' <img src="' + result.image + '">'
                  + '</div>'
                ;
              }
              html += '<div class="info">';
              if(result.price !== undefined) {
                html+= '<div class="price">' + result.price + '</div>';
              }
              if(result.title !== undefined) {
                html+= '<div class="title">' + result.title + '</div>';
              }
              if(result.description !== undefined) {
                html+= '<div class="description">' + result.description + '</div>';
              }
              html  += ''
                + '</div>'
                + '</div>'
              ;
            });
            html  += ''
              + '</div>'
            ;
          }
        });
        if(response.resultPage) {
          html += ''
          + '<a href="' + response.resultPage.url + '" class="all">'
          +   response.resultPage.text
          + '</a>';
        }
        return html;
      }
      return false;
    },
    simple: function(response) {
      var
        html = ''
      ;
      if(response.results !== undefined) {

        // each result
        $.each(response.results, function(index, result) {
          html  += '<a class="result" href="' + result.url + '">';
          if(result.image !== undefined) {
            html+= ''
              + '<div class="image">'
              + ' <img src="' + result.image + '">'
              + '</div>'
            ;
          }
          html += '<div class="info">';
          if(result.price !== undefined) {
            html+= '<div class="price">' + result.price + '</div>';
          }
          if(result.title !== undefined) {
            html+= '<div class="title">' + result.title + '</div>';
          }
          if(result.description !== undefined) {
            html+= '<div class="description">' + result.description + '</div>';
          }
          html  += ''
            + '</div>'
            + '</a>'
          ;
        });

        if(response.resultPage) {
          html += ''
          + '<a href="' + response.resultPage.url + '" class="all">'
          +   response.resultPage.text
          + '</a>';
        }
        return html;
      }
      return false;
    }
  }
};

})( jQuery, window , document );
/*
 * # Semantic - Shape
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.shape = function(parameters) {
  var
    $allModules     = $(this),
<<<<<<< HEAD

    moduleSelector  = $allModules.selector || '',
    settings        = $.extend(true, {}, $.fn.shape.settings, parameters),

    // internal aliases
    namespace     = settings.namespace,
    selector      = settings.selector,
    error         = settings.error,
    className     = settings.className,

    // define namespaces for modules
    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,
=======
    $body           = $('body'),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;

  $allModules
    .each(function() {
      var
<<<<<<< HEAD
=======
        moduleSelector  = $allModules.selector || '',
        settings        = $.extend(true, {}, $.fn.shape.settings, parameters),

        // internal aliases
        namespace     = settings.namespace,
        selector      = settings.selector,
        error         = settings.error,
        className     = settings.className,

        // define namespaces for modules
        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        // selector cache
        $module       = $(this),
        $sides        = $module.find(selector.sides),
        $side         = $module.find(selector.side),

        // private variables
<<<<<<< HEAD
=======
        nextSelector = false,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $activeSide,
        $nextSide,

        // standard module
        element       = this,
        instance      = $module.data(moduleNamespace),
        module
      ;

      module = {

        initialize: function() {
          module.verbose('Initializing module for', element);
          module.set.defaultSide();
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, instance)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module for', element);
          $module
            .removeData(moduleNamespace)
            .off(eventNamespace)
          ;
        },

        refresh: function() {
          module.verbose('Refreshing selector cache for', element);
          $module = $(element);
          $sides  = $(this).find(selector.shape);
          $side   = $(this).find(selector.side);
        },

        repaint: function() {
          module.verbose('Forcing repaint event');
          var
            shape          = $sides.get(0) || document.createElement('div'),
            fakeAssignment = shape.offsetWidth
          ;
        },

        animate: function(propertyObject, callback) {
          module.verbose('Animating box with properties', propertyObject);
          callback = callback || function(event) {
            module.verbose('Executing animation callback');
            if(event !== undefined) {
              event.stopPropagation();
            }
            module.reset();
            module.set.active();
          };
<<<<<<< HEAD
          if(settings.useCSS) {
            if(module.get.transitionEvent()) {
              module.verbose('Starting CSS animation');
              $module
                .addClass(className.animating)
              ;
              module.set.stageSize();
              module.repaint();
              $module
                .addClass(className.css)
              ;
              $activeSide
                .addClass(className.hidden)
              ;
              $sides
                .css(propertyObject)
                .one(module.get.transitionEvent(), callback)
              ;
            }
            else {
              callback();
            }
          }
          else {
            // not yet supported until .animate() is extended to allow RotateX/Y
            module.verbose('Starting javascript animation');
            $module
              .addClass(className.animating)
              .removeClass(className.css)
            ;
            module.set.stageSize();
            module.repaint();
            $activeSide
              .animate({
                opacity: 0
              }, settings.duration, settings.easing)
            ;
            $sides
              .animate(propertyObject, settings.duration, settings.easing, callback)
            ;
=======
          $.proxy(settings.beforeChange, $nextSide[0])();
          if(module.get.transitionEvent()) {
            module.verbose('Starting CSS animation');
            $module
              .addClass(className.animating)
            ;
            module.repaint();
            $module
              .addClass(className.animating)
            ;
            $activeSide
              .addClass(className.hidden)
            ;
            $sides
              .css(propertyObject)
              .one(module.get.transitionEvent(), callback)
            ;
            module.set.duration(settings.duration);
          }
          else {
            callback();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        queue: function(method) {
          module.debug('Queueing animation of', method);
          $sides
            .one(module.get.transitionEvent(), function() {
              module.debug('Executing queued animation');
              setTimeout(function(){
                $module.shape(method);
              }, 0);
            })
          ;
<<<<<<< HEAD
        },

        reset: function() {
          module.verbose('Animating states reset');
          $module
            .removeClass(className.css)
            .removeClass(className.animating)
            .attr('style', '')
            .removeAttr('style')
          ;
          // removeAttr style does not consistently work in safari
          $sides
            .attr('style', '')
            .removeAttr('style')
          ;
          $side
            .attr('style', '')
            .removeAttr('style')
            .removeClass(className.hidden)
          ;
          $nextSide
            .removeClass(className.animating)
            .attr('style', '')
            .removeAttr('style')
          ;
        },

        is: {
          animating: function() {
            return $module.hasClass(className.animating);
          }
        },

        get: {

          transform: {
            up: function() {
              var
                translate = {
                  y: -(($activeSide.outerHeight() - $nextSide.outerHeight()) / 2),
                  z: -($activeSide.outerHeight() / 2)
                }
              ;
              return {
                transform: 'translateY(' + translate.y + 'px) translateZ('+ translate.z + 'px) rotateX(-90deg)'
              };
            },

            down: function() {
              var
                translate = {
                  y: -(($activeSide.outerHeight() - $nextSide.outerHeight()) / 2),
                  z: -($activeSide.outerHeight() / 2)
                }
              ;
              return {
                transform: 'translateY(' + translate.y + 'px) translateZ('+ translate.z + 'px) rotateX(90deg)'
              };
            },

            left: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2),
                  z : -($activeSide.outerWidth() / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) translateZ(' + translate.z + 'px) rotateY(90deg)'
              };
            },

            right: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2),
                  z : -($activeSide.outerWidth() / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) translateZ(' + translate.z + 'px) rotateY(-90deg)'
              };
            },

            over: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) rotateY(180deg)'
              };
            },

            back: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) rotateY(-180deg)'
              };
            }
          },

          transitionEvent: function() {
            var
              element     = document.createElement('element'),
              transitions = {
                'transition'       :'transitionend',
                'OTransition'      :'oTransitionEnd',
                'MozTransition'    :'transitionend',
                'WebkitTransition' :'webkitTransitionEnd'
              },
              transition
            ;
            for(transition in transitions){
              if( element.style[transition] !== undefined ){
                return transitions[transition];
              }
            }
          },

          nextSide: function() {
            return ( $activeSide.next(selector.side).size() > 0 )
              ? $activeSide.next(selector.side)
              : $module.find(selector.side).first()
            ;
          }

=======
        },

        reset: function() {
          module.verbose('Animating states reset');
          $module
            .removeClass(className.animating)
            .attr('style', '')
            .removeAttr('style')
          ;
          // removeAttr style does not consistently work in safari
          $sides
            .attr('style', '')
            .removeAttr('style')
          ;
          $side
            .attr('style', '')
            .removeAttr('style')
            .removeClass(className.hidden)
          ;
          $nextSide
            .removeClass(className.animating)
            .attr('style', '')
            .removeAttr('style')
          ;
        },

        is: {
          animating: function() {
            return $module.hasClass(className.animating);
          }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        set: {

          defaultSide: function() {
            $activeSide = $module.find('.' + settings.className.active);
            $nextSide   = ( $activeSide.next(selector.side).size() > 0 )
              ? $activeSide.next(selector.side)
              : $module.find(selector.side).first()
            ;
<<<<<<< HEAD
=======
            nextSelector = false;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.verbose('Active side set to', $activeSide);
            module.verbose('Next side set to', $nextSide);
          },

<<<<<<< HEAD
          stageSize: function() {
            var
              stage = {
                width  : $nextSide.outerWidth(),
                height : $nextSide.outerHeight()
              }
            ;
            module.verbose('Resizing stage to fit new content', stage);
            $module
              .css({
                width  : stage.width,
                height : stage.height
=======
          duration: function(duration) {
            duration = duration || settings.duration;
            duration = (typeof duration == 'number')
              ? duration + 'ms'
              : duration
            ;
            module.verbose('Setting animation duration', duration);
            $sides.add($side)
              .css({
                '-webkit-transition-duration': duration,
                '-moz-transition-duration': duration,
                '-ms-transition-duration': duration,
                '-o-transition-duration': duration,
                'transition-duration': duration
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              })
            ;
          },

<<<<<<< HEAD
          nextSide: function(selector) {
=======
          stageSize: function() {
            var
              $clone      = $module.clone().addClass(className.loading),
              $activeSide = $clone.find('.' + settings.className.active),
              $nextSide   = (nextSelector)
                ? $clone.find(nextSelector)
                : ( $activeSide.next(selector.side).size() > 0 )
                  ? $activeSide.next(selector.side)
                  : $clone.find(selector.side).first(),
              newSize = {}
            ;
            $activeSide.removeClass(className.active);
            $nextSide.addClass(className.active);
            $clone.prependTo($body);
            newSize = {
              width  : $nextSide.outerWidth(),
              height : $nextSide.outerHeight()
            };
            $clone.remove();
            $module
              .css(newSize)
            ;
            module.verbose('Resizing stage to fit new content', newSize);
          },

          nextSide: function(selector) {
            nextSelector = selector;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            $nextSide = $module.find(selector);
            if($nextSide.size() === 0) {
              module.error(error.side);
            }
            module.verbose('Next side manually set to', $nextSide);
          },

          active: function() {
            module.verbose('Setting new side to active', $nextSide);
            $side
              .removeClass(className.active)
            ;
            $nextSide
              .addClass(className.active)
            ;
<<<<<<< HEAD
            $.proxy(settings.onChange, $nextSide)();
=======
            $.proxy(settings.onChange, $nextSide[0])();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.set.defaultSide();
          }
        },

        flip: {

          up: function() {
            module.debug('Flipping up', $nextSide);
            if( !module.is.animating() ) {
<<<<<<< HEAD
=======
              module.set.stageSize();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.stage.above();
              module.animate( module.get.transform.up() );
            }
            else {
              module.queue('flip up');
            }
          },

          down: function() {
            module.debug('Flipping down', $nextSide);
            if( !module.is.animating() ) {
<<<<<<< HEAD
=======
              module.set.stageSize();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.stage.below();
              module.animate( module.get.transform.down() );
            }
            else {
              module.queue('flip down');
            }
          },

          left: function() {
            module.debug('Flipping left', $nextSide);
            if( !module.is.animating() ) {
<<<<<<< HEAD
=======
              module.set.stageSize();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.stage.left();
              module.animate(module.get.transform.left() );
            }
            else {
              module.queue('flip left');
            }
          },

          right: function() {
            module.debug('Flipping right', $nextSide);
            if( !module.is.animating() ) {
<<<<<<< HEAD
=======
              module.set.stageSize();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.stage.right();
              module.animate(module.get.transform.right() );
            }
            else {
              module.queue('flip right');
            }
          },

          over: function() {
            module.debug('Flipping over', $nextSide);
            if( !module.is.animating() ) {
<<<<<<< HEAD
=======
              module.set.stageSize();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.stage.behind();
              module.animate(module.get.transform.over() );
            }
            else {
              module.queue('flip over');
            }
          },

          back: function() {
            module.debug('Flipping back', $nextSide);
            if( !module.is.animating() ) {
<<<<<<< HEAD
=======
              module.set.stageSize();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.stage.behind();
              module.animate(module.get.transform.back() );
            }
            else {
              module.queue('flip back');
            }
          }

        },

<<<<<<< HEAD
=======
        get: {

          transform: {
            up: function() {
              var
                translate = {
                  y: -(($activeSide.outerHeight() - $nextSide.outerHeight()) / 2),
                  z: -($activeSide.outerHeight() / 2)
                }
              ;
              return {
                transform: 'translateY(' + translate.y + 'px) translateZ('+ translate.z + 'px) rotateX(-90deg)'
              };
            },

            down: function() {
              var
                translate = {
                  y: -(($activeSide.outerHeight() - $nextSide.outerHeight()) / 2),
                  z: -($activeSide.outerHeight() / 2)
                }
              ;
              return {
                transform: 'translateY(' + translate.y + 'px) translateZ('+ translate.z + 'px) rotateX(90deg)'
              };
            },

            left: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2),
                  z : -($activeSide.outerWidth() / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) translateZ(' + translate.z + 'px) rotateY(90deg)'
              };
            },

            right: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2),
                  z : -($activeSide.outerWidth() / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) translateZ(' + translate.z + 'px) rotateY(-90deg)'
              };
            },

            over: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) rotateY(180deg)'
              };
            },

            back: function() {
              var
                translate = {
                  x : -(($activeSide.outerWidth() - $nextSide.outerWidth()) / 2)
                }
              ;
              return {
                transform: 'translateX(' + translate.x + 'px) rotateY(-180deg)'
              };
            }
          },

          transitionEvent: function() {
            var
              element     = document.createElement('element'),
              transitions = {
                'transition'       :'transitionend',
                'OTransition'      :'oTransitionEnd',
                'MozTransition'    :'transitionend',
                'WebkitTransition' :'webkitTransitionEnd'
              },
              transition
            ;
            for(transition in transitions){
              if( element.style[transition] !== undefined ){
                return transitions[transition];
              }
            }
          },

          nextSide: function() {
            return ( $activeSide.next(selector.side).size() > 0 )
              ? $activeSide.next(selector.side)
              : $module.find(selector.side).first()
            ;
          }

        },

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        stage: {

          above: function() {
            var
              box = {
                origin : (($activeSide.outerHeight() - $nextSide.outerHeight()) / 2),
                depth  : {
                  active : ($nextSide.outerHeight() / 2),
                  next   : ($activeSide.outerHeight() / 2)
                }
              }
            ;
            module.verbose('Setting the initial animation position as above', $nextSide, box);
            $activeSide
              .css({
                'transform' : 'rotateY(0deg) translateZ(' + box.depth.active + 'px)'
              })
            ;
            $nextSide
              .addClass(className.animating)
              .css({
                'display'   : 'block',
                'top'       : box.origin + 'px',
                'transform' : 'rotateX(90deg) translateZ(' + box.depth.next + 'px)'
              })
            ;
          },

          below: function() {
            var
              box = {
                origin : (($activeSide.outerHeight() - $nextSide.outerHeight()) / 2),
                depth  : {
                  active : ($nextSide.outerHeight() / 2),
                  next   : ($activeSide.outerHeight() / 2)
                }
              }
            ;
            module.verbose('Setting the initial animation position as below', $nextSide, box);
            $activeSide
              .css({
                'transform' : 'rotateY(0deg) translateZ(' + box.depth.active + 'px)'
              })
            ;
            $nextSide
              .addClass(className.animating)
              .css({
                'display'   : 'block',
                'top'       : box.origin + 'px',
                'transform' : 'rotateX(-90deg) translateZ(' + box.depth.next + 'px)'
              })
            ;
          },

          left: function() {
            var
              box = {
                origin : ( ( $activeSide.outerWidth() - $nextSide.outerWidth() ) / 2),
                depth  : {
                  active : ($nextSide.outerWidth() / 2),
                  next   : ($activeSide.outerWidth() / 2)
                }
              }
            ;
            module.verbose('Setting the initial animation position as left', $nextSide, box);
            $activeSide
              .css({
                'transform' : 'rotateY(0deg) translateZ(' + box.depth.active + 'px)'
              })
            ;
            $nextSide
              .addClass(className.animating)
              .css({
                'display'   : 'block',
                'left'      : box.origin + 'px',
                'transform' : 'rotateY(-90deg) translateZ(' + box.depth.next + 'px)'
              })
            ;
          },

          right: function() {
            var
              box = {
                origin : ( ( $activeSide.outerWidth() - $nextSide.outerWidth() ) / 2),
                depth  : {
                  active : ($nextSide.outerWidth() / 2),
                  next   : ($activeSide.outerWidth() / 2)
                }
              }
            ;
            module.verbose('Setting the initial animation position as left', $nextSide, box);
            $activeSide
              .css({
                'transform' : 'rotateY(0deg) translateZ(' + box.depth.active + 'px)'
              })
            ;
            $nextSide
              .addClass(className.animating)
              .css({
                'display'   : 'block',
                'left'      : box.origin + 'px',
                'transform' : 'rotateY(90deg) translateZ(' + box.depth.next + 'px)'
              })
            ;
          },

          behind: function() {
            var
              box = {
                origin : ( ( $activeSide.outerWidth() - $nextSide.outerWidth() ) / 2),
                depth  : {
                  active : ($nextSide.outerWidth() / 2),
                  next   : ($activeSide.outerWidth() / 2)
                }
              }
            ;
            module.verbose('Setting the initial animation position as behind', $nextSide, box);
            $activeSide
              .css({
                'transform' : 'rotateY(0deg)'
              })
            ;
            $nextSide
              .addClass(className.animating)
              .css({
                'display'   : 'block',
                'left'      : box.origin + 'px',
                'transform' : 'rotateY(-180deg)'
              })
            ;
          }
        },
        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.shape.settings = {

  // module info
  name : 'Shape',

  // debug content outputted to console
  debug      : true,

  // verbose debug output
  verbose    : true,

  // performance data output
  performance: true,

  // event namespace
  namespace  : 'shape',

  // callback occurs on side change
  beforeChange : function() {},
  onChange     : function() {},

<<<<<<< HEAD
  // use css animation (currently only true is supported)
  useCSS     : true,

  // animation duration (useful only with future js animations)
  duration   : 1000,
  easing     : 'easeInOutQuad',
=======
  // animation duration
  duration   : 700,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

  // possible errors
  error: {
    side   : 'You tried to switch to a side that does not exist.',
    method : 'The method you called is not defined'
  },

  // classnames used
  className   : {
<<<<<<< HEAD
    css       : 'css',
    animating : 'animating',
    hidden    : 'hidden',
=======
    animating : 'animating',
    hidden    : 'hidden',
    loading   : 'loading',
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    active    : 'active'
  },

  // selectors used
  selector    : {
    sides : '.sides',
    side  : '.side'
  }

};


})( jQuery, window , document );
/*
<<<<<<< HEAD
 * # Semantic - Dropdown
=======
 * # Semantic - Sidebar
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.sidebar = function(parameters) {
  var
<<<<<<< HEAD
    $allModules     = $(this),

    settings        = ( $.isPlainObject(parameters) )
      ? $.extend(true, {}, $.fn.sidebar.settings, parameters)
      : $.fn.sidebar.settings,

    selector        = settings.selector,
    className       = settings.className,
    namespace       = settings.namespace,
    error           = settings.error,

    eventNamespace  = '.' + namespace,
    moduleNamespace = 'module-' + namespace,
    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),
    invokedResponse
=======
    $allModules    = $(this),
    $body          = $('body'),
    $head          = $('head'),

    moduleSelector = $allModules.selector || '',

    time           = new Date().getTime(),
    performance    = [],

    query          = arguments[0],
    methodInvoked  = (typeof query == 'string'),
    queryArguments = [].slice.call(arguments, 1),
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;

  $allModules
    .each(function() {
      var
<<<<<<< HEAD
        $module  = $(this),

        $body    = $('body'),
        $head    = $('head'),
        $style   = $('style[title=' + namespace + ']'),

        element  = this,
        instance = $module.data(moduleNamespace),
=======
        settings        = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.sidebar.settings, parameters)
          : $.extend({}, $.fn.sidebar.settings),

        selector        = settings.selector,
        className       = settings.className,
        namespace       = settings.namespace,
        error           = settings.error,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

        $module         = $(this),
        $style          = $('style[title=' + namespace + ']'),

        element         = this,
        instance        = $module.data(moduleNamespace),
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        module
      ;

      module      = {

        initialize: function() {
          module.debug('Initializing sidebar', $module);
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module for', $module);
          $module
            .off(eventNamespace)
            .removeData(moduleNamespace)
          ;
        },

        refresh: function() {
          module.verbose('Refreshing selector cache');
          $style  = $('style[title=' + namespace + ']');
        },

        attachEvents: function(selector, event) {
          var
            $toggle = $(selector)
          ;
          event = $.isFunction(module[event])
            ? module[event]
            : module.toggle
          ;
          if($toggle.size() > 0) {
            module.debug('Attaching sidebar events to element', selector, event);
            $toggle
              .off(eventNamespace)
              .on('click' + eventNamespace, event)
            ;
          }
          else {
            module.error(error.notFound);
          }
        },

<<<<<<< HEAD

        show: function() {
          module.debug('Showing sidebar');
          if(module.is.closed()) {
            if(!settings.overlay) {
              module.pushPage();
            }
            module.set.active();
=======
        show: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          module.debug('Showing sidebar', callback);
          if(module.is.closed()) {
            if(!settings.overlay) {
              if(settings.exclusive) {
                module.hideAll();
              }
              module.pushPage();
            }
            module.set.active();
            callback();
            $.proxy(settings.onChange, element)();
            $.proxy(settings.onShow, element)();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            module.debug('Sidebar is already visible');
          }
        },

<<<<<<< HEAD
        hide: function() {
=======
        hide: function(callback) {
          callback = $.isFunction(callback)
            ? callback
            : function(){}
          ;
          module.debug('Hiding sidebar', callback);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          if(module.is.open()) {
            if(!settings.overlay) {
              module.pullPage();
              module.remove.pushed();
            }
            module.remove.active();
<<<<<<< HEAD
          }
        },

=======
            callback();
            $.proxy(settings.onChange, element)();
            $.proxy(settings.onHide, element)();
          }
        },

        hideAll: function() {
          $(selector.sidebar)
            .filter(':visible')
              .sidebar('hide')
          ;
        },

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        toggle: function() {
          if(module.is.closed()) {
            module.show();
          }
          else {
            module.hide();
          }
        },

        pushPage: function() {
          var
            direction = module.get.direction(),
            distance  = (module.is.vertical())
              ? $module.outerHeight()
              : $module.outerWidth()
          ;
          if(settings.useCSS) {
            module.debug('Using CSS to animate body');
            module.add.bodyCSS(direction, distance);
            module.set.pushed();
          }
          else {
            module.animatePage(direction, distance, module.set.pushed);
          }
        },

        pullPage: function() {
          var
            direction = module.get.direction()
          ;
          if(settings.useCSS) {
            module.debug('Resetting body position css');
            module.remove.bodyCSS();
          }
          else {
            module.debug('Resetting body position using javascript');
            module.animatePage(direction, 0);
          }
          module.remove.pushed();
        },

        animatePage: function(direction, distance) {
          var
            animateSettings = {}
          ;
          animateSettings['padding-' + direction] = distance;
          module.debug('Using javascript to animate body', animateSettings);
          $body
            .animate(animateSettings, settings.duration, module.set.pushed)
          ;
        },

        add: {
          bodyCSS: function(direction, distance) {
            var
              style
            ;
            if(direction !== className.bottom) {
              style = ''
                + '<style title="' + namespace + '">'
                + 'body.pushed {'
                + '  margin-' + direction + ': ' + distance + 'px !important;'
                + '}'
                + '</style>'
              ;
            }
            $head.append(style);
            module.debug('Adding body css to head', $style);
          }
        },

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        remove: {
          bodyCSS: function() {
            module.debug('Removing body css styles', $style);
            module.refresh();
            $style.remove();
          },
          active: function() {
            $module.removeClass(className.active);
          },
          pushed: function() {
            module.verbose('Removing body push state', module.get.direction());
            $body
              .removeClass(className[ module.get.direction() ])
              .removeClass(className.pushed)
            ;
          }
        },

        set: {
          active: function() {
            $module.addClass(className.active);
          },
          pushed: function() {
            module.verbose('Adding body push state', module.get.direction());
            $body
              .addClass(className[ module.get.direction() ])
              .addClass(className.pushed)
            ;
          }
        },

        get: {
          direction: function() {
            if($module.hasClass(className.top)) {
              return className.top;
            }
            else if($module.hasClass(className.right)) {
              return className.right;
            }
            else if($module.hasClass(className.bottom)) {
              return className.bottom;
            }
            else {
              return className.left;
            }
          },
          transitionEvent: function() {
            var
              element     = document.createElement('element'),
              transitions = {
                'transition'       :'transitionend',
                'OTransition'      :'oTransitionEnd',
                'MozTransition'    :'transitionend',
                'WebkitTransition' :'webkitTransitionEnd'
              },
              transition
            ;
            for(transition in transitions){
              if( element.style[transition] !== undefined ){
                return transitions[transition];
              }
            }
          }
        },

        is: {
          open: function() {
            return $module.is(':animated') || $module.hasClass(className.active);
          },
          closed: function() {
            return !module.is.open();
          },
          vertical: function() {
            return $module.hasClass(className.top);
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
<<<<<<< HEAD
        internal: function(name, value) {
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
        internal: function(name, value) {
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };
      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;

<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.sidebar.settings = {

  name        : 'Sidebar',
  namespace   : 'sidebar',

  verbose     : true,
  debug       : true,
  performance : true,

  useCSS      : true,
<<<<<<< HEAD
  overlay     : false,
  duration    : 300,

  side        : 'left',

=======
  exclusive   : true,
  overlay     : false,
  duration    : 300,

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  onChange     : function(){},
  onShow       : function(){},
  onHide       : function(){},

  className: {
    active : 'active',
    pushed : 'pushed',
    top    : 'top',
    left   : 'left',
    right  : 'right',
    bottom : 'bottom'
  },

<<<<<<< HEAD
=======
  selector: {
    sidebar: '.ui.sidebar'
  },

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  error   : {
    method   : 'The method you called is not defined.',
    notFound : 'There were no elements that matched the specified selector'
  }

};

})( jQuery, window , document );
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
/*
 * # Semantic - Tab
 * http://github.com/jlukic/semantic-ui/
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


;(function ($, window, document, undefined) {

  $.fn.tab = function(parameters) {

    var
      settings        = $.extend(true, {}, $.fn.tab.settings, parameters),

      $module         = $(this),
      $tabs           = $(settings.context).find(settings.selector.tabs),

      moduleSelector  = $module.selector || '',

      cache           = {},
      firstLoad       = true,
      recursionDepth  = 0,

      activeTabPath,
      parameterArray,
      historyEvent,

      element         = this,
      time            = new Date().getTime(),
      performance     = [],

      className       = settings.className,
      metadata        = settings.metadata,
      error           = settings.error,

      eventNamespace  = '.' + settings.namespace,
<<<<<<< HEAD
      moduleNamespace = settings.namespace + '-module',
=======
      moduleNamespace = 'module-' + settings.namespace,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6

      instance        = $module.data(moduleNamespace),

      query           = arguments[0],
      methodInvoked   = (instance !== undefined && typeof query == 'string'),
      queryArguments  = [].slice.call(arguments, 1),

      module,
<<<<<<< HEAD
      invokedResponse
=======
      returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    ;

    module = {

      initialize: function() {
        module.debug('Initializing Tabs', $module);

        // set up automatic routing
        if(settings.auto) {
          module.verbose('Setting up automatic tab retrieval from server');
          settings.apiSettings = {
            url: settings.path + '/{$tab}'
          };
        }

        // attach history events
        if(settings.history) {
<<<<<<< HEAD
=======
          module.debug('Initializing page state');
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          if( $.address === undefined ) {
            module.error(error.state);
            return false;
          }
<<<<<<< HEAD
          else if(settings.path === false) {
            module.error(error.path);
            return false;
          }
          else {
            module.verbose('Address library found adding state change event');
            $.address
              .state(settings.path)
=======
          else {
            if(settings.historyType == 'hash') {
              module.debug('Using hash state change to manage state');
            }
            if(settings.historyType == 'html5') {
              module.debug('Using HTML5 to manage state');
              if(settings.path !== false) {
                $.address
                  .history(true)
                  .state(settings.path)
                ;
              }
              else {
                module.error(error.path);
                return false;
              }
            }
            $.address
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              .unbind('change')
              .bind('change', module.event.history.change)
            ;
          }
        }

        // attach events if navigation wasn't set to window
        if( !$.isWindow( element ) ) {
          module.debug('Attaching tab activation events to element', $module);
          $module
            .on('click' + eventNamespace, module.event.click)
          ;
        }
        module.instantiate();
      },

      instantiate: function () {
        module.verbose('Storing instance of module', module);
        $module
          .data(moduleNamespace, module)
        ;
      },

      destroy: function() {
        module.debug('Destroying tabs', $module);
        $module
<<<<<<< HEAD
=======
          .removeData(moduleNamespace)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          .off(eventNamespace)
        ;
      },

      event: {
        click: function(event) {
<<<<<<< HEAD
          module.debug('Navigation clicked');
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          var
            tabPath = $(this).data(metadata.tab)
          ;
          if(tabPath !== undefined) {
            if(settings.history) {
<<<<<<< HEAD
              $.address.value(tabPath);
            }
            else {
=======
              module.verbose('Updating page state', event);
              $.address.value(tabPath);
            }
            else {
              module.verbose('Changing tab without state management', event);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.changeTab(tabPath);
            }
            event.preventDefault();
          }
          else {
            module.debug('No tab specified');
          }
        },
        history: {
          change: function(event) {
            var
              tabPath   = event.pathNames.join('/') || module.get.initialPath(),
              pageTitle = settings.templates.determineTitle(tabPath) || false
            ;
            module.debug('History change event', tabPath, event);
            historyEvent = event;
            if(tabPath !== undefined) {
              module.changeTab(tabPath);
            }
            if(pageTitle) {
              $.address.title(pageTitle);
            }
          }
        }
      },

      refresh: function() {
        if(activeTabPath) {
          module.debug('Refreshing tab', activeTabPath);
          module.changeTab(activeTabPath);
        }
      },

      cache: {

        read: function(cacheKey) {
          return (cacheKey !== undefined)
            ? cache[cacheKey]
            : false
          ;
        },
        add: function(cacheKey, content) {
          cacheKey = cacheKey || activeTabPath;
          module.debug('Adding cached content for', cacheKey);
          cache[cacheKey] = content;
        },
        remove: function(cacheKey) {
          cacheKey = cacheKey || activeTabPath;
          module.debug('Removing cached content for', cacheKey);
          delete cache[cacheKey];
        }
      },

<<<<<<< HEAD
=======
      set: {
        state: function(url) {
          $.address.value(url);
        }
      },

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
      changeTab: function(tabPath) {
        var
          pushStateAvailable = (window.history && window.history.pushState),
          shouldIgnoreLoad   = (pushStateAvailable && settings.ignoreFirstLoad && firstLoad),
          remoteContent      = (settings.auto || $.isPlainObject(settings.apiSettings) ),
          // only get default path if not remote content
          pathArray = (remoteContent && !shouldIgnoreLoad)
            ? module.utilities.pathToArray(tabPath)
            : module.get.defaultPathArray(tabPath)
        ;
        tabPath = module.utilities.arrayToPath(pathArray);
        module.deactivate.all();
        $.each(pathArray, function(index, tab) {
          var
            currentPathArray   = pathArray.slice(0, index + 1),
            currentPath        = module.utilities.arrayToPath(currentPathArray),

            isTab              = module.is.tab(currentPath),
            isLastIndex        = (index + 1 == pathArray.length),

            $tab               = module.get.tabElement(currentPath),
            nextPathArray,
            nextPath,
            isLastTab
          ;
          module.verbose('Looking for tab', tab);
          if(isTab) {
            module.verbose('Tab was found', tab);

            // scope up
            activeTabPath = currentPath;
            parameterArray = module.utilities.filterArray(pathArray, currentPathArray);

            if(isLastIndex) {
              isLastTab = true;
            }
            else {
              nextPathArray = pathArray.slice(0, index + 2);
              nextPath      = module.utilities.arrayToPath(nextPathArray);
              isLastTab     = ( !module.is.tab(nextPath) );
              if(isLastTab) {
                module.verbose('Tab parameters found', nextPathArray);
              }
            }
            if(isLastTab && remoteContent) {
              if(!shouldIgnoreLoad) {
                module.activate.navigation(currentPath);
                module.content.fetch(currentPath, tabPath);
              }
              else {
                module.debug('Ignoring remote content on first tab load', currentPath);
                firstLoad = false;
                module.cache.add(tabPath, $tab.html());
                module.activate.all(currentPath);
                $.proxy(settings.onTabInit, $tab)(currentPath, parameterArray, historyEvent);
                $.proxy(settings.onTabLoad, $tab)(currentPath, parameterArray, historyEvent);
              }
              return false;
            }
            else {
              module.debug('Opened local tab', currentPath);
              module.activate.all(currentPath);
<<<<<<< HEAD
=======
              if( !module.cache.read(currentPath) ) {
                module.cache.add(currentPath, true);
                module.debug('First time tab loaded calling tab init');
                $.proxy(settings.onTabInit, $tab)(currentPath, parameterArray, historyEvent);
              }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              $.proxy(settings.onTabLoad, $tab)(currentPath, parameterArray, historyEvent);
            }
          }
          else {
            module.error(error.missingTab, tab);
            return false;
          }
        });
      },

      content: {

        fetch: function(tabPath, fullTabPath) {
          var
            $tab             = module.get.tabElement(tabPath),
            apiSettings      = {
              dataType     : 'html',
              stateContext : $tab,
              success      : function(response) {
                module.cache.add(fullTabPath, response);
                module.content.update(tabPath, response);
                if(tabPath == activeTabPath) {
                  module.debug('Content loaded', tabPath);
                  module.activate.tab(tabPath);
                }
                else {
                  module.debug('Content loaded in background', tabPath);
                }
                $.proxy(settings.onTabInit, $tab)(tabPath, parameterArray, historyEvent);
                $.proxy(settings.onTabLoad, $tab)(tabPath, parameterArray, historyEvent);
              },
              urlData: { tab: fullTabPath }
            },
            request         = $tab.data(metadata.promise) || false,
            existingRequest = ( request && request.state() === 'pending' ),
            requestSettings,
            cachedContent
          ;

          fullTabPath   = fullTabPath || tabPath;
          cachedContent = module.cache.read(fullTabPath);

          if(settings.cache && cachedContent) {
            module.debug('Showing existing content', fullTabPath);
            module.content.update(tabPath, cachedContent);
            module.activate.tab(tabPath);
            $.proxy(settings.onTabLoad, $tab)(tabPath, parameterArray, historyEvent);
          }
          else if(existingRequest) {
            module.debug('Content is already loading', fullTabPath);
            $tab
              .addClass(className.loading)
            ;
          }
          else if($.api !== undefined) {
            console.log(settings.apiSettings);
            requestSettings = $.extend(true, { headers: { 'X-Remote': true } }, settings.apiSettings, apiSettings);
            module.debug('Retrieving remote content', fullTabPath, requestSettings);
            $.api( requestSettings );
          }
          else {
            module.error(error.api);
          }
        },

        update: function(tabPath, html) {
          module.debug('Updating html for', tabPath);
          var
            $tab = module.get.tabElement(tabPath)
          ;
          $tab
            .html(html)
          ;
        }
      },

      activate: {
        all: function(tabPath) {
          module.activate.tab(tabPath);
          module.activate.navigation(tabPath);
        },
        tab: function(tabPath) {
          var
            $tab = module.get.tabElement(tabPath)
          ;
          module.verbose('Showing tab content for', $tab);
          $tab.addClass(className.active);
        },
        navigation: function(tabPath) {
          var
            $navigation = module.get.navElement(tabPath)
          ;
          module.verbose('Activating tab navigation for', $navigation, tabPath);
          $navigation.addClass(className.active);
        }
      },

      deactivate: {
        all: function() {
          module.deactivate.navigation();
          module.deactivate.tabs();
        },
        navigation: function() {
          $module
            .removeClass(className.active)
          ;
        },
        tabs: function() {
          $tabs
            .removeClass(className.active + ' ' + className.loading)
          ;
        }
      },

      is: {
        tab: function(tabName) {
          return (tabName !== undefined)
            ? ( module.get.tabElement(tabName).size() > 0 )
            : false
          ;
        }
      },

      get: {
        initialPath: function() {
          return $module.eq(0).data(metadata.tab) || $tabs.eq(0).data(metadata.tab);
        },
        path: function() {
          return $.address.value();
        },
        // adds default tabs to tab path
        defaultPathArray: function(tabPath) {
          return module.utilities.pathToArray( module.get.defaultPath(tabPath) );
        },
        defaultPath: function(tabPath) {
          var
            $defaultNav = $module.filter('[data-' + metadata.tab + '^="' + tabPath + '/"]').eq(0),
            defaultTab  = $defaultNav.data(metadata.tab) || false
          ;
          if( defaultTab ) {
            module.debug('Found default tab', defaultTab);
            if(recursionDepth < settings.maxDepth) {
              recursionDepth++;
              return module.get.defaultPath(defaultTab);
            }
            module.error(error.recursion);
          }
          else {
            module.debug('No default tabs found for', tabPath, $tabs);
          }
          recursionDepth = 0;
          return tabPath;
        },
        navElement: function(tabPath) {
          tabPath = tabPath || activeTabPath;
          return $module.filter('[data-' + metadata.tab + '="' + tabPath + '"]');
        },
        tabElement: function(tabPath) {
          var
            $fullPathTab,
            $simplePathTab,
            tabPathArray,
            lastTab
          ;
          tabPath        = tabPath || activeTabPath;
          tabPathArray   = module.utilities.pathToArray(tabPath);
          lastTab        = module.utilities.last(tabPathArray);
          $fullPathTab   = $tabs.filter('[data-' + metadata.tab + '="' + lastTab + '"]');
          $simplePathTab = $tabs.filter('[data-' + metadata.tab + '="' + tabPath + '"]');
          return ($fullPathTab.size() > 0)
            ? $fullPathTab
            : $simplePathTab
          ;
        },
        tab: function() {
          return activeTabPath;
        }
      },

      utilities: {
        filterArray: function(keepArray, removeArray) {
          return $.grep(keepArray, function(keepValue) {
            return ( $.inArray(keepValue, removeArray) == -1);
          });
        },
        last: function(array) {
          return $.isArray(array)
            ? array[ array.length - 1]
            : false
          ;
        },
        pathToArray: function(pathName) {
          if(pathName === undefined) {
            pathName = activeTabPath;
          }
          return typeof pathName == 'string'
            ? pathName.split('/')
            : [pathName]
          ;
        },
        arrayToPath: function(pathArray) {
          return $.isArray(pathArray)
            ? pathArray.join('/')
            : false
          ;
        }
      },

      setting: function(name, value) {
<<<<<<< HEAD
        if(value !== undefined) {
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else {
            settings[name] = value;
          }
=======
        if( $.isPlainObject(name) ) {
          $.extend(true, settings, name);
        }
        else if(value !== undefined) {
          settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
        else {
          return settings[name];
        }
      },
      internal: function(name, value) {
<<<<<<< HEAD
        if(value !== undefined) {
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else {
            module[name] = value;
          }
=======
        if( $.isPlainObject(name) ) {
          $.extend(true, module, name);
        }
        else if(value !== undefined) {
          module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
        else {
          return module[name];
        }
      },
      debug: function() {
        if(settings.debug) {
          if(settings.performance) {
            module.performance.log(arguments);
          }
          else {
            module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
            module.debug.apply(console, arguments);
          }
        }
      },
      verbose: function() {
        if(settings.verbose && settings.debug) {
          if(settings.performance) {
            module.performance.log(arguments);
          }
          else {
            module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
            module.verbose.apply(console, arguments);
          }
        }
      },
      error: function() {
        module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
        module.error.apply(console, arguments);
      },
      performance: {
        log: function(message) {
          var
            currentTime,
            executionTime,
            previousTime
          ;
          if(settings.performance) {
            currentTime   = new Date().getTime();
            previousTime  = time || currentTime;
            executionTime = currentTime - previousTime;
            time          = currentTime;
            performance.push({
              'Element'        : element,
              'Name'           : message[0],
              'Arguments'      : [].slice.call(message, 1) || '',
              'Execution Time' : executionTime
            });
          }
          clearTimeout(module.performance.timer);
          module.performance.timer = setTimeout(module.performance.display, 100);
        },
        display: function() {
          var
            title = settings.name + ':',
            totalTime = 0
          ;
          time = false;
          clearTimeout(module.performance.timer);
          $.each(performance, function(index, data) {
            totalTime += data['Execution Time'];
          });
          title += ' ' + totalTime + 'ms';
          if(moduleSelector) {
            title += ' \'' + moduleSelector + '\'';
          }
          if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
            console.groupCollapsed(title);
            if(console.table) {
              console.table(performance);
            }
            else {
              $.each(performance, function(index, data) {
                console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
              });
            }
            console.groupEnd();
          }
          performance = [];
        }
      },
      invoke: function(query, passedArguments, context) {
        var
<<<<<<< HEAD
=======
          object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          maxDepth,
          found,
          response
        ;
        passedArguments = passedArguments || queryArguments;
        context         = element         || context;
<<<<<<< HEAD
        if(typeof query == 'string' && instance !== undefined) {
=======
        if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          query    = query.split(/[\. ]/);
          maxDepth = query.length - 1;
          $.each(query, function(depth, value) {
            var camelCaseValue = (depth != maxDepth)
              ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
              : query
            ;
<<<<<<< HEAD
            if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
              instance = instance[value];
            }
            else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
              instance = instance[camelCaseValue];
            }
            else if( instance[value] !== undefined ) {
              found = instance[value];
              return false;
            }
            else if( instance[camelCaseValue] !== undefined ) {
              found = instance[camelCaseValue];
              return false;
            }
            else {
              module.error(error.method);
=======
            if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
              object = object[camelCaseValue];
            }
            else if( object[camelCaseValue] !== undefined ) {
              found = object[camelCaseValue];
              return false;
            }
            else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
              object = object[value];
            }
            else if( object[value] !== undefined ) {
              found = object[value];
              return false;
            }
            else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              return false;
            }
          });
        }
        if ( $.isFunction( found ) ) {
          response = found.apply(context, passedArguments);
        }
        else if(found !== undefined) {
          response = found;
        }
<<<<<<< HEAD
        if($.isArray(invokedResponse)) {
          invokedResponse.push(response);
        }
        else if(typeof invokedResponse == 'string') {
          invokedResponse = [invokedResponse, response];
        }
        else if(response !== undefined) {
          invokedResponse = response;
=======
        if($.isArray(returnedValue)) {
          returnedValue.push(response);
        }
        else if(returnedValue !== undefined) {
          returnedValue = [returnedValue, response];
        }
        else if(response !== undefined) {
          returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        }
        return found;
      }
    };

    if(methodInvoked) {
      if(instance === undefined) {
        module.initialize();
      }
      module.invoke(query);
    }
    else {
      if(instance !== undefined) {
        module.destroy();
      }
      module.initialize();
    }

<<<<<<< HEAD
    return (invokedResponse !== undefined)
      ? invokedResponse
=======
    return (returnedValue !== undefined)
      ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
      : this
    ;

  };

  // shortcut for tabbed content with no defined navigation
  $.tab = function(settings) {
    $(window).tab(settings);
  };

  $.fn.tab.settings = {

    name        : 'Tab',
    verbose     : true,
    debug       : true,
    performance : true,
    namespace   : 'tab',

    // only called first time a tab's content is loaded (when remote source)
    onTabInit   : function(tabPath, parameterArray, historyEvent) {},
    // called on every load
    onTabLoad   : function(tabPath, parameterArray, historyEvent) {},

    templates   : {
      determineTitle: function(tabArray) {}
    },

    // uses pjax style endpoints fetching content from same url with remote-content headers
    auto            : false,
<<<<<<< HEAD
    history         : false,
=======
    history         : true,
    historyType     : 'hash',
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    path            : false,

    context         : 'body',

    // max depth a tab can be nested
    maxDepth        : 25,
    // dont load content on first load
    ignoreFirstLoad : false,
    // load tab content new every tab click
    alwaysRefresh   : false,
    // cache the content requests to pull locally
    cache           : true,
    // settings for api call
    apiSettings     : false,

    error: {
      api        : 'You attempted to load content without API module',
      method     : 'The method you called is not defined',
      missingTab : 'Tab cannot be found',
      noContent  : 'The tab you specified is missing a content url.',
      path       : 'History enabled, but no path was specified',
      recursion  : 'Max recursive depth reached',
      state      : 'The state library has not been initialized'
    },

    metadata : {
      tab    : 'tab',
      loaded : 'loaded',
      promise: 'promise'
    },

    className   : {
      loading : 'loading',
      active  : 'active'
    },

    selector    : {
      tabs : '.ui.tab'
    }

  };

})( jQuery, window , document );

/*
 * # Semantic - Transition
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

;(function ( $, window, document, undefined ) {

$.fn.transition = function() {
  var
    $allModules     = $(this),
    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    moduleArguments = arguments,
    query           = moduleArguments[0],
    queryArguments  = [].slice.call(arguments, 1),
    methodInvoked   = (typeof query === 'string'),

    requestAnimationFrame = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function(callback) { setTimeout(callback, 0); },

<<<<<<< HEAD
    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;
  $allModules
    .each(function() {
      var
        $module  = $(this),
        element  = this,

        // set at run time
        settings,
        instance,

        error,
        className,
        metadata,
        animationEnd,
        animationName,

        namespace,
        moduleNamespace,
        module
      ;

      module = {

        initialize: function() {
          // get settings
          settings        = module.get.settings.apply(element, moduleArguments);
          module.verbose('Converted arguments into settings object', settings);

          // set shortcuts
          error           = settings.error;
          className       = settings.className;
          namespace       = settings.namespace;
          metadata        = settings.metadata;
          moduleNamespace = 'module-' + namespace;

          animationEnd    = module.get.animationEvent();
          animationName   = module.get.animationName();

<<<<<<< HEAD
          instance        = $module.data(moduleNamespace);

          if(instance === undefined) {
            module.instantiate();
          }
=======
          instance        = $module.data(moduleNamespace) || module;

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          if(methodInvoked) {
            methodInvoked = module.invoke(query);
          }
          // no internal method was found matching query or query not made
          if(methodInvoked === false) {
            module.animate();
          }
<<<<<<< HEAD
=======
          module.instantiate();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
<<<<<<< HEAD
          instance = module;
=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          $module
            .data(moduleNamespace, instance)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous module for', element);
          $module
            .removeData(moduleNamespace)
          ;
        },

<<<<<<< HEAD
        animate: function(overrideSettings) {
          settings = overrideSettings || settings;
          module.debug('Preparing animation', settings.animation);
          if(module.is.animating()) {
            if(settings.queue) {
=======
        refresh: function() {
          module.verbose('Refreshing display type on next animation');
          delete instance.displayType;
        },

        forceRepaint: function() {
          module.verbose('Forcing element repaint');
          var
            $parentElement = $module.parent(),
            $nextElement = $module.next()
          ;
          if($nextElement.size() === 0) {
            $module.detach().appendTo($parentElement);
          }
          else {
            $module.detach().insertBefore($nextElement);
          }
        },

        repaint: function() {
          module.verbose('Repainting element');
          var
            fakeAssignment = element.offsetWidth
          ;
        },

        animate: function(overrideSettings) {
          settings = overrideSettings || settings;
          if(!module.is.supported()) {
            module.error(error.support);
            return false;
          }
          module.debug('Preparing animation', settings.animation);
          if(module.is.animating() && settings.queue) {
            if(!settings.allowRepeats && module.has.direction() && module.is.occuring() && instance.queuing !== true) {
              module.error(error.repeated);
            }
            else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.queue(settings.animation);
            }
            return false;
          }
<<<<<<< HEAD
          module.save.conditions();
          module.set.duration(settings.duration);
          module.set.animating();
          module.repaint();
          $module
            .addClass(className.transition)
            .addClass(settings.animation)
            .one(animationEnd, module.complete)
          ;
          if(!module.has.direction() && module.can.transition()) {
            module.set.direction();
          }
          if(!module.can.animate()) {
            module.restore.conditions();
            module.error(error.noAnimation);
            return false;
          }
          module.show();
          module.debug('Starting tween', settings.animation, $module.attr('class'));
=======
          if(module.can.animate) {
            module.set.animating(settings.animation);
          }
          else {
            module.error(error.noAnimation, settings.animation);
          }
        },

        reset: function() {
          module.debug('Resetting animation to beginning conditions');
          $module.off(animationEnd);
          module.restore.conditions();
          module.hide();
          module.remove.animating();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        queue: function(animation) {
          module.debug('Queueing animation of', animation);
          instance.queuing = true;
          $module
            .one(animationEnd, function() {
              instance.queuing = false;
<<<<<<< HEAD
=======
              module.repaint();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              module.animate.apply(this, settings);
            })
          ;
        },

        complete: function () {
          module.verbose('CSS animation complete', settings.animation);
          if(!module.is.looping()) {
<<<<<<< HEAD
            if($module.hasClass(className.outward)) {
              module.restore.conditions();
              module.hide();
            }
            else if($module.hasClass(className.inward)) {
              module.restore.conditions();
              module.show();
=======
            if( module.is.outward() ) {
              module.verbose('Animation is outward, hiding element');
              module.restore.conditions();
              module.remove.display();
              module.hide();
              $.proxy(settings.onHide, this)();
            }
            else if( module.is.inward() ) {
              module.verbose('Animation is outward, showing element');
              module.restore.conditions();
              module.show();
              $.proxy(settings.onShow, this)();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
            else {
              module.restore.conditions();
            }
<<<<<<< HEAD
=======
            module.remove.duration();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            module.remove.animating();
          }
          $.proxy(settings.complete, this)();
        },

<<<<<<< HEAD
        repaint: function(fakeAssignment) {
          module.verbose('Forcing repaint event');
          fakeAssignment = element.offsetWidth;
        },

        has: {
          direction: function(animation) {
            animation = animation || settings.animation;
            if( $module.hasClass(className.inward) || $module.hasClass(className.outward) ) {
              return true;
            }
=======
        has: {
          direction: function(animation) {
            animation = animation || settings.animation;
            if( animation.search(className.inward) !== -1 || animation.search(className.outward) !== -1) {
              module.debug('Direction already set in animation');
              return true;
            }
            return false;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        set: {

<<<<<<< HEAD
          animating: function() {
            $module.addClass(className.animating);
=======
          animating: function(animation) {
            animation = animation || settings.animation;
            module.save.conditions();
            if(module.can.transition() && !module.has.direction()) {
              module.set.direction();
            }
            module.remove.hidden();
            module.set.display();
            $module
              .addClass(className.animating)
              .addClass(className.transition)
              .addClass(animation)
              .one(animationEnd, module.complete)
            ;
            module.set.duration(settings.duration);
            module.debug('Starting tween', settings.animation, $module.attr('class'));
          },

          display: function() {
            var
              displayType = module.get.displayType()
            ;
            if(displayType !== 'block') {
              module.verbose('Setting final visibility to', displayType);
              $module
                .css({
                  display: displayType
                })
              ;
            }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          },

          direction: function() {
            if($module.is(':visible')) {
              module.debug('Automatically determining the direction of animation', 'Outward');
              $module
<<<<<<< HEAD
                .addClass(className.outward)
                .removeClass(className.inward)
=======
                .removeClass(className.inward)
                .addClass(className.outward)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              ;
            }
            else {
              module.debug('Automatically determining the direction of animation', 'Inward');
              $module
<<<<<<< HEAD
                .addClass(className.inward)
                .removeClass(className.outward)
=======
                .removeClass(className.outward)
                .addClass(className.inward)
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              ;
            }
          },

          looping: function() {
            module.debug('Transition set to loop');
            $module
              .addClass(className.looping)
            ;
          },

          duration: function(duration) {
            duration = duration || settings.duration;
            duration = (typeof duration == 'number')
              ? duration + 'ms'
              : duration
            ;
            module.verbose('Setting animation duration', duration);
            $module
              .css({
                '-webkit-animation-duration': duration,
                '-moz-animation-duration': duration,
                '-ms-animation-duration': duration,
                '-o-animation-duration': duration,
                'animation-duration': duration
              })
            ;
<<<<<<< HEAD
=======
          },

          hidden: function() {
            $module
              .addClass(className.transition)
              .addClass(className.hidden)
            ;
          },

          visible: function() {
            $module
              .addClass(className.transition)
              .addClass(className.visible)
            ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        save: {
<<<<<<< HEAD
          conditions: function() {
            module.cache = {
              className : $module.attr('class'),
              style     : $module.attr('style')
            };
            module.verbose('Saving original attributes', module.cache);
=======
          displayType: function(displayType) {
            instance.displayType = displayType;
          },
          transitionExists: function(animation, exists) {
            $.fn.transition.exists[animation] = exists;
            module.verbose('Saving existence of transition', animation, exists);
          },
          conditions: function() {
            instance.cache = {
              className : $module.attr('class'),
              style     : $module.attr('style')
            };
            module.verbose('Saving original attributes', instance.cache);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        restore: {
          conditions: function() {
<<<<<<< HEAD
            if(typeof module.cache === undefined) {
              module.error(error.cache);
              return false;
            }
            if(module.cache.className) {
              $module.attr('class', module.cache.className);
=======
            if(instance.cache === undefined) {
              return false;
            }
            if(instance.cache.className) {
              $module.attr('class', instance.cache.className);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
            else {
              $module.removeAttr('class');
            }
<<<<<<< HEAD
            if(module.cache.style) {
              $module.attr('style', module.cache.style);
            }
            else {
              $module.removeAttr('style');
=======
            if(instance.cache.style) {
              $module.attr('style', instance.cache.style);
            }
            else {
              if(module.get.displayType() === 'block') {
                $module.removeAttr('style');
              }
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            }
            if(module.is.looping()) {
              module.remove.looping();
            }
<<<<<<< HEAD
            module.verbose('Restoring original attributes', module.cache);
=======
            module.verbose('Restoring original attributes', instance.cache);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        remove: {

          animating: function() {
            $module.removeClass(className.animating);
          },

<<<<<<< HEAD
=======
          display: function() {
            if(instance.displayType !== undefined) {
              $module.css('display', '');
            }
          },

          duration: function() {
            $module
              .css({
                '-webkit-animation-duration' : '',
                '-moz-animation-duration'    : '',
                '-ms-animation-duration'     : '',
                '-o-animation-duration'      : '',
                'animation-duration'         : ''
              })
            ;
          },

          hidden: function() {
            $module.removeClass(className.hidden);
          },

          visible: function() {
            $module.removeClass(className.visible);
          },

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          looping: function() {
            module.debug('Transitions are no longer looping');
            $module
              .removeClass(className.looping)
            ;
<<<<<<< HEAD
            module.repaint();
=======
            module.forceRepaint();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }

        },

        get: {

          settings: function(animation, duration, complete) {
            // single settings object
<<<<<<< HEAD
            if($.isPlainObject(animation)) {
=======
            if(typeof animation == 'object') {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              return $.extend(true, {}, $.fn.transition.settings, animation);
            }
            // all arguments provided
            else if(typeof complete == 'function') {
<<<<<<< HEAD
              return $.extend(true, {}, $.fn.transition.settings, {
=======
              return $.extend({}, $.fn.transition.settings, {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                animation : animation,
                complete  : complete,
                duration  : duration
              });
            }
            // only duration provided
            else if(typeof duration == 'string' || typeof duration == 'number') {
<<<<<<< HEAD
              return $.extend(true, {}, $.fn.transition.settings, {
=======
              return $.extend({}, $.fn.transition.settings, {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                animation : animation,
                duration  : duration
              });
            }
            // duration is actually settings object
            else if(typeof duration == 'object') {
<<<<<<< HEAD
              return $.extend(true, {}, $.fn.transition.settings, duration, {
=======
              return $.extend({}, $.fn.transition.settings, duration, {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                animation : animation
              });
            }
            // duration is actually callback
            else if(typeof duration == 'function') {
<<<<<<< HEAD
              return $.extend(true, {}, $.fn.transition.settings, {
=======
              return $.extend({}, $.fn.transition.settings, {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                animation : animation,
                complete  : duration
              });
            }
            // only animation provided
            else {
<<<<<<< HEAD
              return $.extend(true, {}, $.fn.transition.settings, {
=======
              return $.extend({}, $.fn.transition.settings, {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                animation : animation
              });
            }
            return $.fn.transition.settings;
          },

<<<<<<< HEAD
=======
          displayType: function() {
            if(instance.displayType === undefined) {
              // create fake element to determine display state
              module.can.transition();
            }
            return instance.displayType;
          },

          transitionExists: function(animation) {
            return $.fn.transition.exists[animation];
          },

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          animationName: function() {
            var
              element     = document.createElement('div'),
              animations  = {
                'animation'       :'animationName',
                'OAnimation'      :'oAnimationName',
                'MozAnimation'    :'mozAnimationName',
                'WebkitAnimation' :'webkitAnimationName'
              },
              animation
            ;
            for(animation in animations){
              if( element.style[animation] !== undefined ){
<<<<<<< HEAD
                module.verbose('Determining animation vendor name property', animations[animation]);
=======
                module.verbose('Determined animation vendor name property', animations[animation]);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return animations[animation];
              }
            }
            return false;
          },

          animationEvent: function() {
            var
              element     = document.createElement('div'),
              animations  = {
                'animation'       :'animationend',
                'OAnimation'      :'oAnimationEnd',
                'MozAnimation'    :'mozAnimationEnd',
                'WebkitAnimation' :'webkitAnimationEnd'
              },
              animation
            ;
            for(animation in animations){
              if( element.style[animation] !== undefined ){
<<<<<<< HEAD
                module.verbose('Determining animation vendor end event', animations[animation]);
=======
                module.verbose('Determined animation vendor end event', animations[animation]);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return animations[animation];
              }
            }
            return false;
          }

        },

        can: {
          animate: function() {
<<<<<<< HEAD
            if($module.css(animationName) !== 'none') {
              module.debug('CSS definition found');
              return true;
            }
            else {
              module.debug('Unable to find css definition');
=======
            if($module.css(settings.animation) !== 'none') {
              module.debug('CSS definition found',  $module.css(settings.animation));
              return true;
            }
            else {
              module.debug('Unable to find css definition', $module.attr('class'));
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
              return false;
            }
          },
          transition: function() {
            var
<<<<<<< HEAD
              $clone           = $('<div>').addClass( $module.attr('class') ).appendTo($('body')),
              currentAnimation = $clone.css(animationName),
              inAnimation      = $clone.addClass(className.inward).css(animationName)
            ;
            if(currentAnimation != inAnimation) {
              module.debug('In/out transitions exist');
              $clone.remove();
              return true;
            }
            else {
              module.debug('Static animation found');
              $clone.remove();
              return false;
            }
=======
              elementClass     = $module.attr('class'),
              animation        = settings.animation,
              transitionExists = module.get.transitionExists(settings.animation),
              $clone,
              currentAnimation,
              inAnimation,
              displayType
            ;
            if( transitionExists === undefined || instance.displayType === undefined) {
              module.verbose('Determining whether animation exists');
              $clone = $('<div>').addClass( elementClass ).appendTo($('body'));
              currentAnimation = $clone
                .removeClass(className.inward)
                .removeClass(className.outward)
                .addClass(className.animating)
                .addClass(className.transition)
                .addClass(animation)
                .css(animationName)
              ;
              inAnimation = $clone
                .addClass(className.inward)
                .css(animationName)
              ;
              displayType = $clone
                .attr('class', elementClass)
                .show()
                .css('display')
              ;
              module.verbose('Determining final display state', displayType);
              if(currentAnimation != inAnimation) {
                module.debug('Transition exists for animation', animation);
                transitionExists = true;
              }
              else {
                module.debug('Static animation found', animation, displayType);
                transitionExists = false;
              }
              $clone.remove();
              module.save.displayType(displayType);
              module.save.transitionExists(animation, transitionExists);
            }
            return transitionExists;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        is: {
          animating: function() {
            return $module.hasClass(className.animating);
          },
<<<<<<< HEAD
          looping: function() {
            return $module.hasClass(className.looping);
          },
          visible: function() {
            return $module.is(':visible');
=======
          inward: function() {
            return $module.hasClass(className.inward);
          },
          outward: function() {
            return $module.hasClass(className.outward);
          },
          looping: function() {
            return $module.hasClass(className.looping);
          },
          occuring: function(animation) {
            animation = animation || settings.animation;
            return ( $module.hasClass(animation) );
          },
          visible: function() {
            return $module.is(':visible');
          },
          supported: function() {
            return(animationName !== false && animationEnd !== false);
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
        },

        hide: function() {
          module.verbose('Hiding element');
<<<<<<< HEAD
          $module
            .removeClass(className.visible)
            .addClass(className.transition)
            .addClass(className.hidden)
          ;
          module.repaint();
        },
        show: function() {
          module.verbose('Showing element');
          $module
            .removeClass(className.hidden)
            .addClass(className.transition)
            .addClass(className.visible)
          ;
=======
          module.remove.visible();
          module.set.hidden();
          module.repaint();
        },

        show: function(display) {
          module.verbose('Showing element', display);
          module.remove.hidden();
          module.set.visible();
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          module.repaint();
        },

        start: function() {
          module.verbose('Starting animation');
          $module.removeClass(className.disabled);
        },

        stop: function() {
          module.debug('Stopping animation');
          $module.addClass(className.disabled);
        },

        toggle: function() {
          module.debug('Toggling play status');
          $module.toggleClass(className.disabled);
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
              else {
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found || false;
        }
      };
      module.initialize();
    })
  ;
<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

<<<<<<< HEAD
$.fn.transition.settings = {

  // module info
  name   : 'Transition',

  // debug content outputted to console
  debug        : true,

  // verbose debug output
  verbose      : true,

  // performance data output
  performance  : true,

  // event namespace
  namespace    : 'transition',

  // animation complete event
  complete     : function() {},

  // animation duration
  animation    : 'fade',
  duration     : '700ms',

  // queue up animations
  queue        : true,

  className    : {
    transition : 'ui transition',
    animating  : 'animating',
    looping    : 'looping',
    loading    : 'loading',
    disabled   : 'disabled',
    hidden     : 'hidden',
    visible    : 'visible',
    inward     : 'in',
    outward    : 'out'
=======
$.fn.transition.exists = {};

$.fn.transition.settings = {

  // module info
  name        : 'Transition',

  // debug content outputted to console
  debug       : true,

  // verbose debug output
  verbose     : true,

  // performance data output
  performance : true,

  // event namespace
  namespace   : 'transition',

  // animation complete event
  complete    : function() {},
  onShow      : function() {},
  onHide      : function() {},

  // whether animation can occur twice in a row
  allowRepeats : false,

  // animation duration
  animation  : 'fade',
  duration   : '700ms',

  // new animations will occur after previous ones
  queue       : true,

  className   : {
    animating  : 'animating',
    disabled   : 'disabled',
    hidden     : 'hidden',
    inward     : 'in',
    loading    : 'loading',
    looping    : 'looping',
    outward    : 'out',
    transition : 'ui transition',
    visible    : 'visible'
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  },

  // possible errors
  error: {
    noAnimation : 'There is no css animation matching the one you specified.',
<<<<<<< HEAD
    method      : 'The method you called is not defined'
=======
    repeated    : 'That animation is already occurring, cancelling repeated animation',
    method      : 'The method you called is not defined',
    support     : 'This browser does not support CSS animations'
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  }

};


})( jQuery, window , document );

/*  ******************************
  Module - Video
  Author: Jack Lukic

  This is a video playlist and video embed plugin which helps
  provide helpers for adding embed code for vimeo and youtube and
  abstracting event handlers for each library

******************************  */

;(function ($, window, document, undefined) {

$.fn.video = function(parameters) {

  var
    $allModules     = $(this),

<<<<<<< HEAD
    settings        = ( $.isPlainObject(parameters) )
      ? $.extend(true, {}, $.fn.video.settings, parameters)
      : $.fn.video.settings,

=======
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    moduleSelector  = $allModules.selector || '',

    time            = new Date().getTime(),
    performance     = [],

    query           = arguments[0],
    methodInvoked   = (typeof query == 'string'),
    queryArguments  = [].slice.call(arguments, 1),

<<<<<<< HEAD
    selector        = settings.selector,
    className       = settings.className,
    error           = settings.error,
    metadata        = settings.metadata,
    namespace       = settings.namespace,

    eventNamespace  = '.' + namespace,
    moduleNamespace = namespace + '-module',

    invokedResponse
=======
    returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
  ;

  $allModules
    .each(function() {
      var
<<<<<<< HEAD
=======
        settings        = ( $.isPlainObject(parameters) )
          ? $.extend(true, {}, $.fn.video.settings, parameters)
          : $.extend({}, $.fn.video.settings),

        selector        = settings.selector,
        className       = settings.className,
        error           = settings.error,
        metadata        = settings.metadata,
        namespace       = settings.namespace,

        eventNamespace  = '.' + namespace,
        moduleNamespace = 'module-' + namespace,

<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        $module         = $(this),
        $placeholder    = $module.find(selector.placeholder),
        $playButton     = $module.find(selector.playButton),
        $embed          = $module.find(selector.embed),

        element         = this,
        instance        = $module.data(moduleNamespace),
        module
      ;

      module = {

        initialize: function() {
          module.debug('Initializing video');
          $placeholder
            .on('click' + eventNamespace, module.play)
          ;
          $playButton
            .on('click' + eventNamespace, module.play)
          ;
          module.instantiate();
        },

        instantiate: function() {
          module.verbose('Storing instance of module', module);
          instance = module;
          $module
            .data(moduleNamespace, module)
          ;
        },

        destroy: function() {
          module.verbose('Destroying previous instance of video');
          $module
            .removeData(moduleNamespace)
            .off(eventNamespace)
          ;
<<<<<<< HEAD
=======
          $placeholder
            .off(eventNamespace)
          ;
          $playButton
            .off(eventNamespace)
          ;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
        },

        // sets new video
        change: function(source, id, url) {
          module.debug('Changing video to ', source, id, url);
          $module
            .data(metadata.source, source)
            .data(metadata.id, id)
            .data(metadata.url, url)
          ;
          settings.onChange();
        },

        // clears video embed
        reset: function() {
          module.debug('Clearing video embed and showing placeholder');
          $module
            .removeClass(className.active)
          ;
          $embed
            .html(' ')
          ;
          $placeholder
            .show()
          ;
          settings.onReset();
        },

        // plays current video
        play: function() {
          module.debug('Playing video');
          var
            source = $module.data(metadata.source) || false,
            url    = $module.data(metadata.url)    || false,
            id     = $module.data(metadata.id)     || false
          ;
          $embed
            .html( module.generate.html(source, id, url) )
          ;
          $module
            .addClass(className.active)
          ;
          settings.onPlay();
        },

        generate: {
          // generates iframe html
          html: function(source, id, url) {
            module.debug('Generating embed html');
            var
              width = (settings.width == 'auto')
                ? $module.width()
                : settings.width,
              height = (settings.height == 'auto')
                ? $module.height()
                : settings.height,
              html
            ;
            if(source && id) {
              if(source == 'vimeo') {
                html = ''
                  + '<iframe src="http://player.vimeo.com/video/' + id + '?=' + module.generate.url(source) + '"'
                  + ' width="' + width + '" height="' + height + '"'
                  + ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                ;
              }
              else if(source == 'youtube') {
                html = ''
                  + '<iframe src="http://www.youtube.com/embed/' + id + '?=' + module.generate.url(source) + '"'
                  + ' width="' + width + '" height="' + height + '"'
                  + ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                ;
              }
            }
            else if(url) {
              html = ''
                + '<iframe src="' + url + '"'
                + ' width="' + width + '" height="' + height + '"'
                + ' frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
              ;
            }
            else {
              module.error(error.noVideo);
            }
            return html;
          },

          // generate url parameters
          url: function(source) {
            var
              api      = (settings.api)
                ? 1
                : 0,
              autoplay = (settings.autoplay)
                ? 1
                : 0,
              hd       = (settings.hd)
                ? 1
                : 0,
              showUI   = (settings.showUI)
                ? 1
                : 0,
              // opposite used for some params
              hideUI   = !(settings.showUI)
                ? 1
                : 0,
              url = ''
            ;
            if(source == 'vimeo') {
              url = ''
                +      'api='      + api
                + '&amp;title='    + showUI
                + '&amp;byline='   + showUI
                + '&amp;portrait=' + showUI
                + '&amp;autoplay=' + autoplay
              ;
              if(settings.color) {
                url += '&amp;color=' + settings.color;
              }
            }
            if(source == 'ustream') {
              url = ''
                + 'autoplay=' + autoplay
              ;
              if(settings.color) {
                url += '&amp;color=' + settings.color;
              }
            }
            else if(source == 'youtube') {
              url = ''
                +      'enablejsapi=' + api
                + '&amp;autoplay='    + autoplay
                + '&amp;autohide='    + hideUI
                + '&amp;hq='          + hd
                + '&amp;modestbranding=1'
              ;
              if(settings.color) {
                url += '&amp;color=' + settings.color;
              }
            }
            return url;
          }
        },

        setting: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, settings, name);
            }
            else {
              settings[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, settings, name);
          }
          else if(value !== undefined) {
            settings[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return settings[name];
          }
        },
        internal: function(name, value) {
<<<<<<< HEAD
          if(value !== undefined) {
            if( $.isPlainObject(name) ) {
              $.extend(true, module, name);
            }
            else {
              module[name] = value;
            }
=======
          if( $.isPlainObject(name) ) {
            $.extend(true, module, name);
          }
          else if(value !== undefined) {
            module[name] = value;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          else {
            return module[name];
          }
        },
        debug: function() {
          if(settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.debug.apply(console, arguments);
            }
          }
        },
        verbose: function() {
          if(settings.verbose && settings.debug) {
            if(settings.performance) {
              module.performance.log(arguments);
            }
            else {
              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
              module.verbose.apply(console, arguments);
            }
          }
        },
        error: function() {
          module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
          module.error.apply(console, arguments);
        },
        performance: {
          log: function(message) {
            var
              currentTime,
              executionTime,
              previousTime
            ;
            if(settings.performance) {
              currentTime   = new Date().getTime();
              previousTime  = time || currentTime;
              executionTime = currentTime - previousTime;
              time          = currentTime;
              performance.push({
                'Element'        : element,
                'Name'           : message[0],
                'Arguments'      : [].slice.call(message, 1) || '',
                'Execution Time' : executionTime
              });
            }
            clearTimeout(module.performance.timer);
            module.performance.timer = setTimeout(module.performance.display, 100);
          },
          display: function() {
            var
              title = settings.name + ':',
              totalTime = 0
            ;
            time = false;
            clearTimeout(module.performance.timer);
            $.each(performance, function(index, data) {
              totalTime += data['Execution Time'];
            });
            title += ' ' + totalTime + 'ms';
            if(moduleSelector) {
              title += ' \'' + moduleSelector + '\'';
            }
            if($allModules.size() > 1) {
              title += ' ' + '(' + $allModules.size() + ')';
            }
            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
              console.groupCollapsed(title);
              if(console.table) {
                console.table(performance);
              }
              else {
                $.each(performance, function(index, data) {
                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
                });
              }
              console.groupEnd();
            }
            performance = [];
          }
        },
        invoke: function(query, passedArguments, context) {
          var
<<<<<<< HEAD
=======
            object = instance,
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            maxDepth,
            found,
            response
          ;
          passedArguments = passedArguments || queryArguments;
          context         = element         || context;
<<<<<<< HEAD
          if(typeof query == 'string' && instance !== undefined) {
=======
          if(typeof query == 'string' && object !== undefined) {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
            query    = query.split(/[\. ]/);
            maxDepth = query.length - 1;
            $.each(query, function(depth, value) {
              var camelCaseValue = (depth != maxDepth)
                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                : query
              ;
<<<<<<< HEAD
              if( $.isPlainObject( instance[value] ) && (depth != maxDepth) ) {
                instance = instance[value];
              }
              else if( $.isPlainObject( instance[camelCaseValue] ) && (depth != maxDepth) ) {
                instance = instance[camelCaseValue];
              }
              else if( instance[value] !== undefined ) {
                found = instance[value];
                return false;
              }
              else if( instance[camelCaseValue] !== undefined ) {
                found = instance[camelCaseValue];
                return false;
              }
              else {
                module.error(error.method);
=======
              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
                object = object[camelCaseValue];
              }
              else if( object[camelCaseValue] !== undefined ) {
                found = object[camelCaseValue];
                return false;
              }
              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
                object = object[value];
              }
              else if( object[value] !== undefined ) {
                found = object[value];
                return false;
              }
              else {
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
                return false;
              }
            });
          }
          if ( $.isFunction( found ) ) {
            response = found.apply(context, passedArguments);
          }
          else if(found !== undefined) {
            response = found;
          }
<<<<<<< HEAD
          if($.isArray(invokedResponse)) {
            invokedResponse.push(response);
          }
          else if(typeof invokedResponse == 'string') {
            invokedResponse = [invokedResponse, response];
          }
          else if(response !== undefined) {
            invokedResponse = response;
=======
          if($.isArray(returnedValue)) {
            returnedValue.push(response);
          }
          else if(returnedValue !== undefined) {
            returnedValue = [returnedValue, response];
          }
          else if(response !== undefined) {
            returnedValue = response;
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
          }
          return found;
        }
      };

      if(methodInvoked) {
        if(instance === undefined) {
          module.initialize();
        }
        module.invoke(query);
      }
      else {
        if(instance !== undefined) {
          module.destroy();
        }
        module.initialize();
      }
    })
  ;
<<<<<<< HEAD
  return (invokedResponse !== undefined)
    ? invokedResponse
=======
  return (returnedValue !== undefined)
    ? returnedValue
<<<<<<< HEAD
>>>>>>> upstream/master
=======
>>>>>>> 763ed5718ca5ba52521779e9c5ba0a18c5213862
>>>>>>> f670ece27b675a08d8c3e0f54567b6f44df2d2f6
    : this
  ;
};

$.fn.video.settings = {

  name        : 'Video',
  namespace   : 'video',

  debug       : true,
  verbose     : true,
  performance : true,

  metadata    : {
    source : 'source',
    id     : 'id',
    url    : 'url'
  },

  onPlay   : function(){},
  onReset  : function(){},
  onChange : function(){},

  // callbacks not coded yet (needs to use jsapi)
  onPause  : function() {},
  onStop   : function() {},

  width    : 'auto',
  height   : 'auto',

  autoplay : false,
  color    : '#442359',
  hd       : true,
  showUI   : false,
  api      : true,

  error      : {
    noVideo     : 'No video specified',
    method      : 'The method you called is not defined'
  },

  className   : {
    active      : 'active'
  },

  selector    : {
    embed       : '.embed',
    placeholder : '.placeholder',
    playButton  : '.play'
  }
};


})( jQuery, window , document );
