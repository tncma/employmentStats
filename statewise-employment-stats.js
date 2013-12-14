{
  "title": "state-wise",
  "services": {
    "query": {
      "idQueue": [
        1,
        2,
        3,
        4
      ],
      "list": {
        "0": {
          "query": "*",
          "alias": "",
          "color": "#7EB26D",
          "id": 0,
          "pin": false,
          "type": "lucene",
          "enable": true
        }
      },
      "ids": [
        0
      ]
    },
    "filter": {
      "idQueue": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "list": {},
      "ids": []
    }
  },
  "rows": [
    {
      "title": "stats",
      "height": "350px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "error": false,
          "span": 4,
          "editable": true,
          "type": "pie",
          "loadingEditor": false,
          "query": {
            "field": "sector",
            "goal": 100
          },
          "queries": {
            "mode": "all",
            "ids": [
              0
            ]
          },
          "size": 10,
          "exclude": [],
          "donut": false,
          "tilt": false,
          "legend": "above",
          "labels": true,
          "mode": "terms",
          "default_field": "DEFAULT",
          "spyable": true,
          "title": "sector"
        },
        {
          "error": false,
          "span": 4,
          "editable": true,
          "type": "map",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ]
          },
          "map": "india",
          "colors": [
            "#A0E2E2",
            "#265656"
          ],
          "size": 100,
          "exclude": [],
          "spyable": true,
          "index_limit": 0,
          "title": "state",
          "field": "state"
        },
        {
          "error": false,
          "span": 4,
          "editable": true,
          "type": "pie",
          "loadingEditor": false,
          "query": {
            "field": "status",
            "goal": 100
          },
          "queries": {
            "mode": "all",
            "ids": [
              0
            ]
          },
          "size": 10,
          "exclude": [],
          "donut": true,
          "tilt": true,
          "legend": "above",
          "labels": true,
          "mode": "terms",
          "default_field": "DEFAULT",
          "spyable": true,
          "title": "status"
        }
      ],
      "notice": false
    },
    {
      "title": "t",
      "height": "150px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "span": 12,
          "editable": true,
          "type": "histogram",
          "loadingEditor": false,
          "mode": "count",
          "time_field": "year",
          "queries": {
            "mode": "all",
            "ids": [
              0
            ]
          },
          "annotate": {
            "enable": false,
            "query": "*",
            "size": 20,
            "field": "_type",
            "sort": [
              "_score",
              "desc"
            ]
          },
          "value_field": null,
          "auto_int": true,
          "resolution": 100,
          "interval": "1y",
          "intervals": [
            "auto",
            "1s",
            "1m",
            "5m",
            "10m",
            "30m",
            "1h",
            "3h",
            "12h",
            "1d",
            "1w",
            "1y"
          ],
          "fill": 0,
          "linewidth": 3,
          "pointradius": 5,
          "timezone": "browser",
          "spyable": true,
          "zoomlinks": true,
          "bars": true,
          "stack": true,
          "points": false,
          "lines": false,
          "legend": true,
          "show_query": true,
          "legend_counts": true,
          "x-axis": true,
          "y-axis": true,
          "percentage": false,
          "zerofill": true,
          "interactive": true,
          "options": true,
          "derivative": false,
          "scale": 1,
          "y_as_bytes": false,
          "tooltip": {
            "value_type": "individual",
            "query_as_alias": true
          },
          "grid": {
            "max": null,
            "min": 0
          },
          "title": "t"
        }
      ],
      "notice": false
    },
    {
      "title": "employment trend",
      "height": "350px",
      "editable": true,
      "collapse": true,
      "collapsable": true,
      "panels": [
        {
          "span": 4,
          "editable": true,
          "type": "histogram",
          "loadingEditor": false,
          "mode": "count",
          "time_field": "year",
          "queries": {
            "mode": "all",
            "ids": [
              0
            ]
          },
          "annotate": {
            "enable": false,
            "query": "*",
            "size": 20,
            "field": "_type",
            "sort": [
              "_score",
              "desc"
            ]
          },
          "value_field": null,
          "auto_int": true,
          "resolution": 100,
          "interval": "1y",
          "intervals": [
            "auto",
            "1s",
            "1m",
            "5m",
            "10m",
            "30m",
            "1h",
            "3h",
            "12h",
            "1d",
            "1w",
            "1y"
          ],
          "fill": 0,
          "linewidth": 3,
          "pointradius": 5,
          "timezone": "browser",
          "spyable": true,
          "zoomlinks": true,
          "bars": true,
          "stack": true,
          "points": false,
          "lines": false,
          "legend": true,
          "show_query": true,
          "legend_counts": true,
          "x-axis": true,
          "y-axis": true,
          "percentage": false,
          "zerofill": true,
          "interactive": true,
          "options": true,
          "derivative": false,
          "scale": 1,
          "y_as_bytes": true,
          "tooltip": {
            "value_type": "individual",
            "query_as_alias": true
          },
          "grid": {
            "max": null,
            "min": 0
          },
          "title": "trend",
          "error": "FacetPhaseExecutionException[Facet [0]: (key) field [year] not found]"
        }
      ],
      "notice": false
    },
    {
      "title": "tabular",
      "height": "350px",
      "editable": true,
      "collapse": true,
      "collapsable": true,
      "panels": [
        {
          "error": false,
          "span": 12,
          "editable": true,
          "type": "table",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ]
          },
          "size": 100,
          "pages": 5,
          "offset": 0,
          "sort": [
            "_score",
            "desc"
          ],
          "group": "default",
          "style": {
            "font-size": "9pt"
          },
          "overflow": "min-height",
          "fields": [
            "year",
            "@timestamp"
          ],
          "highlight": [],
          "sortable": true,
          "header": true,
          "paging": true,
          "field_list": true,
          "all_fields": false,
          "trimFactor": 300,
          "normTimes": true,
          "spyable": true,
          "title": "t"
        }
      ],
      "notice": false
    }
  ],
  "editable": true,
  "failover": false,
  "index": {
    "interval": "none",
    "pattern": "[logstash-]YYYY.MM.DD",
    "default": "_all"
  },
  "style": "light",
  "panel_hints": true,
  "pulldowns": [
    {
      "type": "query",
      "collapse": false,
      "notice": false,
      "enable": true,
      "query": "*",
      "pinned": true,
      "history": [],
      "remember": 10
    },
    {
      "type": "filtering",
      "collapse": false,
      "notice": true,
      "enable": true
    }
  ],
  "nav": [
    {
      "type": "timepicker",
      "collapse": false,
      "notice": false,
      "enable": true,
      "status": "Stable",
      "time_options": [
        "5m",
        "15m",
        "1h",
        "6h",
        "12h",
        "24h",
        "2d",
        "7d",
        "30d"
      ],
      "refresh_intervals": [
        "5s",
        "10s",
        "30s",
        "1m",
        "5m",
        "15m",
        "30m",
        "1h",
        "2h",
        "1d"
      ],
      "timefield": "@timestamp",
      "now": false
    }
  ],
  "loader": {
    "save_gist": false,
    "save_elasticsearch": true,
    "save_local": true,
    "save_default": true,
    "save_temp": true,
    "save_temp_ttl_enable": true,
    "save_temp_ttl": "30d",
    "load_gist": false,
    "load_elasticsearch": true,
    "load_elasticsearch_size": 20,
    "load_local": false,
    "hide": false
  },
  "refresh": false
}