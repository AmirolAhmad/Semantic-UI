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
