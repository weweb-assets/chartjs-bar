---
name: chartjs-bar
description: The chartjs-bar component renders a Chart.js bar chart with guided and advanced data input modes, supporting legend display, axis orientation, data stacking, and styling properties.
keywords:
  - chart.js
  - bar chart
  - guided mode
  - advanced mode
  - data visualization
  - legend position
  - axis orientation
  - stacked bars
  - data aggregation
  - responsive design
---

#### chartjs-bar

Component Purpose: Renders a bar chart using Chart.js library with guided or advanced data input modes.

Properties:
- isLegend: boolean - Display legend. Default: true
- legendPosition: 'top' | 'bottom' | 'left' | 'right' - Legend position. Default: 'top'
- legendAlignement: 'start' | 'center' | 'end' - Legend alignment. Default: 'center'
- legendSize: string - Legend label font size. Default: "12px"
- legendColor: string | null - Legend label color. Default: null
- labelColor: string | null - Axis label color. Default: null
- gridColor: string | null - Grid line color. Default: null
- axis: 'x' | 'y' - Bar orientation. Default: 'x'
- stacked: boolean - Stack bars. Default: false
- startAtZero: boolean - Start y-axis at zero. Default: true
- dataType: 'guided' | 'advanced' - Data input mode. Default: 'advanced'
- labels (advanced): string[] - X-axis labels. Default: ['Tatooine', 'Coruscant', 'Kashyyyk']
- datasets (advanced): object[] - Chart datasets
- options (advanced): object - Additional chart options
- data (guided): any[] - Data collection
- xAxisTitle (guided): string - X-axis title
- dataXField (guided): string - X-axis data field
- dataXFieldProperty (guided): string | null - Nested X-axis data field
- dataOrderBy (guided): 'default' | 'x' | 'y' - Data ordering field
- dataDirection (guided): 'ASC' | 'DESC' - Data order direction
- dataXEmpty (guided): boolean - Include empty x-axis values
- yAxis (guided): 'item-count' | 'field-summary' - Y-axis data type
- dataYField (guided): string - Y-axis data field
- dataYFieldProperty (guided): string | null - Nested Y-axis data field
- aggregate (guided): 'distinct' | 'value' | 'sum' | 'average' | 'median' | 'min' | 'max' - Y-axis aggregation
- groupBy (guided): string - Data grouping field
- groupByProperty (guided): string | null - Nested grouping field
- colors (guided): string[] - Dataset colors

Children: none

Events:
- chart:click
  Payload: { dataX: any, dataY: any, position: { x: number, y: number }, points: [{ label: string, value: number, index: number, datasetIndex: number }] }
  Description: Triggered when clicking on the chart, providing clicked data point information and coordinates

Variables: none

Note: To make graph responsive and contained, set max-width: 100% and height: auto. Set min-width: 0px on direct parent container.