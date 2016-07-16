/*!
 * Cluckles 1.1.0: Twitter Bootstrap Less module for Cluckles.
 * http://cluckles.com
 * 
 * Copyright 2016 Thomas Coleman <tom@ilikeprograms.com>
 * Released under the MIT license
 */
(function (window) {
   var docContext = window.parent.document;
	/**
	 * Allows editing of the @brand-{style} variables which affect alerts/panel headers,
	 * the Primary branding, however affects more, such as the ListGroup background, links etc.
	 * 
	 * @class BrandingComponent
	 * @extends ThemeModifier
	 * 
	 * @param {ClucklesEditor} editor instance which manages the less modifications.
	 * 
	 * @property {string} default   The @brand-default variable which affects the Default styles.
	 * @property {string} primary   The @brand-primary variable which affects the Primary styles.
	 * @property {string} success   The @brand-success variable which affects the Success styles.
	 * @property {string} info      The @brand-info variable which affects the Info styles.
	 * @property {string} warning   The @brand-warning variable which affects the Warning styles.
	 * @property {string} danger    The @brand-danger variable which affects the Danger styles.
	 * 
	 * @returns {BrandingComponent}
	 */
	var BrandingComponent = function (editor) {
//		ThemeModifier.call(this, editor); // Call parent constructor

        this.subscriberDataAttribute = 'data-cluckles-branding';

        // Configure the Modifiers
		this.default = {
			variable:           '@brand-default',
            subscribeProperty:  'default',
            changeFn:           this.setDefaultColor.bind(this),
            subscribers:        [],
			_value:             null
		};
		this.primary = {
			variable:           '@brand-primary',
			subscribeProperty:  'primary',
            changeFn:           this.setPrimaryColor.bind(this),
            subscribers:        [],
			_value:             null
		};
		this.success = {
			variable:           '@brand-success',
			subscribeProperty:  'success',
            changeFn:           this.setSuccessColor.bind(this),
            subscribers:        [],
			_value:             null
		};
		this.info = {
            variable:           '@brand-info',
			subscribeProperty:  'info',
            changeFn:           this.setInfoColor.bind(this),
            subscribers:        [],
			_value:             null
		};
		this.warning = {
            variable:           '@brand-warning',
			subscribeProperty:  'warning',
            changeFn:           this.setWarningColor.bind(this),
            subscribers:        [],
			_value:             null
		};
		this.danger	= {
            variable:           '@brand-danger',
			subscribeProperty:  'danger',
            changeFn:           this.setDangerColor.bind(this),
            subscribers:        [],
			_value:             null
		};
		
        // Configure the modifiers so they can be extracted easier
        this.modifiers = {
            default:    this.default,
            primary:    this.primary,
            success:    this.success,
            info:       this.info,
            warning:    this.warning,
            danger:     this.danger
        };

//        this.setupDataBinding();
	};
	
	// Inherit from parent Prototype and preserve constructor
//	BrandingComponent.prototype             = Object.create(ThemeModifier.prototype);
	BrandingComponent.prototype.constructor = BrandingComponent;

	/**
	 * Gets the Default Branding Color.
	 * 
	 * @returns {undefined}
	 */
	BrandingComponent.prototype.getDefaultColor = function () {
		return this.modifiers.default.value;
	};

	/**
	 * Sets the Default Branding Color.
	 * 
	 * @param {string} color The Default Branding Color to set.
	 * 
	 * @returns {undefined}
	 */
	BrandingComponent.prototype.setDefaultColor = function (color) {
		this.modifiers.default.value = color;
	};

	/**
	 * Gets the Primary Branding Color.
	 * 
	 * @returns {string}
	 */
	BrandingComponent.prototype.getPrimaryColor = function () {
		return this.modifiers.primary.value;
	};

	/**
	 * Sets the Primary Branding Color.
	 * 
	 * @param {string} color The Primary Branding Color to set.
	 * 
	 * @returns {undefined}
	 */
	BrandingComponent.prototype.setPrimaryColor = function (color) {
		this.modifiers.primary.value = color;
	};

	/**
	 * Gets the Success Branding Color.
	 * 
	 * @returns {string}
	 */
	BrandingComponent.prototype.getSuccessColor = function () {
		return this.modifiers.success.value;
	};

	/**
	 * Sets the Success Branding Color.
	 * 
	 * @param {string} color The Success Branding Color to set.
	 * 
	 * @returns {undefined}
	 */
	BrandingComponent.prototype.setSuccessColor = function (color) {
		this.modifiers.success.value = color;
	};

	/**
	 * Gets the Info Branding Color.
	 * 
	 * @returns {string}
	 */
	BrandingComponent.prototype.getInfoColor = function () {
		return this.modifiers.info.value;
	};

	/**
	 * Sets the Info Branding Color.
	 * 
	 * @param {string} color The Info Branding Color to set.
	 * 
	 * @returns {undefined}
	 */
	BrandingComponent.prototype.setInfoColor = function (color) {
		this.modifiers.info.value = color;
	};

	/**
	 * Gets the Warning Branding Color.
	 * 
	 * @returns {string}
	 */
	BrandingComponent.prototype.getWarningColor = function () {
		return this.modifiers.warning.value;
	};

	/**
	 * Sets the Warning Branding Color.
	 * 
	 * @param {type} color The Warning Branding Color to set.
	 * 
	 * @returns {undefined}
	 */
	BrandingComponent.prototype.setWarningColor = function (color) {
		this.modifiers.warning.value = color;
	};

	/**
	 * Gets the Danger Branding Color.
	 * 
	 * @returns {string}
	 */
	BrandingComponent.prototype.getDangerColor = function () {
		return this.modifiers.danger.value;
	};

	/**
	 * Sets the Danger Branding Color.
	 * 
	 * @param {string} color The Danger Branding Color to set.
	 * 
	 * @returns {undefined}
	 */
	BrandingComponent.prototype.setDangerColor = function (color) {
		this.modifiers.danger.value = color;
	};

    var BootstrapClucklesLess = function () {
        this.brandingComponent = new BrandingComponent();

        this.components = [
            this.brandingComponent
        ];
    };
    
    console.log('CustomEvent' in window);

    docContext.addEventListener('DOMContentLoaded', function () {
        var loadedEvent = new CustomEvent('ClucklesFrameworkModuleLoaded', {
           detail: {
               module: BootstrapClucklesLess
           },
           bubbles: true,
           cancellable: true
        });
        
        console.log(loadedEvent);

        window.dispatchEvent(loadedEvent);
    });
})(window);