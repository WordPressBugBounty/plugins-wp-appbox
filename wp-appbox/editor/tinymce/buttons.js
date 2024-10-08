/**
* Verschiedene Aktionen für die Buttons
*
* @since   	3.2.10
* @changed  4.4.0
*/

function wpAppbox_amazonapps_button() {
	return "[appbox amazonapps " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_appgallery_button() {
	return "[appbox appgallery " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_appstore_button() {
	return "[appbox appstore " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_chromewebstore_button() {
	return "[appbox chromewebstore " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_fdroid_button() {
	return "[appbox fdroid " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_edgeaddons_button() {
	return "[appbox edgeaddons " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_firefoxaddon_button() {
	return "[appbox firefoxaddon " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_gog_button() {
	return "[appbox gog " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_googleplay_button() {
	return "[appbox googleplay " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_microsoftstore_button() {
	return "[appbox microsoftstore " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_operaaddons_button() {
	return "[appbox operaaddons " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_snapcraft_button() {
	return "[appbox snapcraft " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_steam_button() {
	return "[appbox steam " + tinyMCE.activeEditor.selection.getContent() + "]";
}

function wpAppbox_wordpress_button() {
	return "[appbox wordpress " + tinyMCE.activeEditor.selection.getContent() + "]";
}


/**
* WP-Appbox-Button für TinyMCE
*
* @since    3.2.10
* @changed  4.4.0
*/

if ( typeof wpappbox_combined_button != 'undefined' ) {
	var button_store_ids = wpappbox_combined_button['ids'],
		button_store_names = wpappbox_combined_button['names']
		values = [],
		i = 0;
	for (i = 0; i < button_store_ids.length; i++) {
		if ( button_store_ids[i] == 'amazonapps' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_amazonapps_button()); } } );
		}
		if ( button_store_ids[i] == 'appstore' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_appstore_button()); } } );
		}
		if ( button_store_ids[i] == 'chromewebstore' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_chromewebstore_button()); } } );
		}
		if ( button_store_ids[i] == 'fdroid' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_fdroid_button()); } } );
		}
		if ( button_store_ids[i] == 'edgeaddons' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_edgeaddons_button()); } } );
		}
		if ( button_store_ids[i] == 'firefoxaddon' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_firefoxaddon_button()); } } );
		}
		if ( button_store_ids[i] == 'gog' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_gog_button()); } } );
		}
		if ( button_store_ids[i] == 'googleplay' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_googleplay_button()); } } );
		}
		if ( button_store_ids[i] == 'appgallery' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_appgallery_button()); } } );
		}
		if ( button_store_ids[i] == 'microsoftstore' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_microsoftstore_button()); } } );
		}
		if ( button_store_ids[i] == 'operaaddons' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_operaaddons_button()); } } );
		}
		if ( button_store_ids[i] == 'snapcraft' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_snapcraft_button()); } } );
		}
		if ( button_store_ids[i] == 'steam' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_steam_button()); } } );
		}
		if ( button_store_ids[i] == 'wordpress' ) {
			values.push( { text: button_store_names[i], onclick : function() { tinyMCE.activeEditor.execCommand('mceInsertContent', false, wpAppbox_wordpress_button()); } } );
		}
	}
	tinymce.PluginManager.add('wpAppbox_CombinedButton', function(editor, url) {
		editor.addButton('wpAppbox_AppboxButton', {
			type: 'menubutton',
			icon: 'icon wpappbox-tinymce-button',
			image : url + '/appbox.btn.png',
			menu : values
		});
	});
}
	

/**
* Die einzelnen Buttons für den TinyMCE
*
* @since   	3.2.10
* @changed  4.4.0
*/

tinymce.create('tinymce.plugins.wpAppbox_StoreButtons', {
	init : function(ed, url) {
		
		ed.addButton('wpAppbox_AmazonAppsButton', {
			title : 'Amazon Apps Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_amazonapps_button());
				},
				image: url + "/amazonapps.btn.png"
		});
		
		ed.addButton('wpAppbox_AppStoreButton', {
			title : '(Mac) App Store Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_appstore_button());
			},
			image: url + "/appstore.btn.png"
		});
		
		ed.addButton('wpAppbox_ChromeWebStoreButton', {
			title : 'Chrome Web Store Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_chromewebstore_button());
			},
			image: url + "/chromewebstore.btn.png"
		});
		
		ed.addButton('wpAppbox_EdgeAddOnsButton', {
			title : 'Edge-Add-Ons Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_edgeaddons_button());
			},
			image: url + "/edgeaddons.btn.png"
		});
		
		ed.addButton('wpAppbox_FDroidButton', {
			title : 'F-Droid Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_fdroid_button());
			},
			image: url + "/fdroid.btn.png"
		});
		
		ed.addButton('wpAppbox_FirefoxAddonButton', {
			title : 'Firefox Extensions Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_firefoxaddon_button());
			},
			image: url + "/firefoxaddon.btn.png"
		});
		
		ed.addButton('wpAppbox_GOGButton', {
			title : 'GOG.com (Good Old Games) Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_gog_button());
			},
			image: url + "/gog.btn.png"
		});
		
		ed.addButton('wpAppbox_GooglePlayButton', {
			title : 'Google Play Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_googleplay_button());
			},
			image: url + "/googleplay.btn.png"
		});
		
		ed.addButton('wpAppbox_AppGalleryButton', {
			title : 'Huawei AppGallery Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_appgallery_button());
			},
			image: url + "/appgallery.btn.png"
		});
		
		ed.addButton('wpAppbox_MicrosoftStoreButton', {
			title : 'Microsoft Store Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_microsoftstore_button());
			},
			image: url + "/microsoftstore.btn.png"
		});
		
		ed.addButton('wpAppbox_OperaAddonsButton', {
			title : 'Opera Add-ons Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_operaaddons_button());
			},
			image: url + "/operaaddons.btn.png"
		});
		
		ed.addButton('wpAppbox_SnapcraftButton', {
			title : 'Snapcraft Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_snapcraft_button());
			},
			image: url + "/snapcraft.btn.png"
		});
		
		ed.addButton('wpAppbox_SteamButton', {
			title : 'Steam Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_steam_button());
			},
			image: url + "/steam.btn.png"
		});
		
		ed.addButton('wpAppbox_WordPressButton', {
			title : 'Wordpress Plugin Appbox',
			onclick : function() {
				ed.execCommand('mceInsertContent', false, wpAppbox_wordpress_button());
			},
			image: url + "/wordpress.btn.png"
		});
	
	}
});
tinymce.PluginManager.add('wpAppboxSingle', tinymce.plugins.wpAppbox_StoreButtons);