# TYPO3 Extension `rte_ckeditor_abbr`

This extension ships a simple plugin for the ckeditor to allow editors setting abbreviations. The plugin itself has been taken from https://github.com/ckeditor/ckeditor5-tutorials-examples/tree/main/abbreviation-plugin/part-1 without only little changes

## Installation

Use `ddev composer req studiomitte/rte-ckeditor-abbr:12.4` or download the extension from TER.

## Usage

All it takes to enable the plugin are the following changes in your `RTE.yaml`:

1. Import the configuration from the extension:

```yaml
editor:
  config:
    importModules:
      - '@studiomitte/rte-ckeditor-abbr/abbreviation.js'
    contentCss:
      - "EXT:rte_ckeditor_abbr/Resources/Public/Css/Abbr.css"
```

2. Enable the plugin:

```yaml
editor:
  config:
    toolbar:
      items:
        - abbreviation
```


## Credits

This extension was created by Georg Ringer for [Studio Mitte, Linz](https://studiomitte.com) with ♥.

[Find more TYPO3 extensions we have developed](https://www.studiomitte.com/loesungen/typo3) that provide additional features for TYPO3 sites. 
