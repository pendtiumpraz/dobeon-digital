# Revision Requirements

## Objective
Update the visual theme to match the "Bavana" brand identity (sourced from bavana.co.id) while preserving all existing elements and copywriting of Dobeon Digital.

## Visual Design Specs
Based on analysis of bavana.co.id CSS:

### Color Palette
- **Background Color**: `#fffaf4` (Warm Cream/Off-White) - *Currently white*
- **Primary Brand Color**: `#113CA4` (Deep Royal Blue) - *Replaces current blue*
- **Secondary/Text Color**: `#343450` (Dark Slate Blue) - *Primary text color*
- **Neutral/Gray**: `#BABABA` (Light Gray)

### Typography (Theme Alignment)
- While the reference uses "Manrope" and "Sorts Mill Goudy", we will maintain the existing font stack but ensure color application aligns with the new palette.

## Implementation Plan
1.  **Update `app/globals.css`**:
    - Modify `:root` variables to use the new color palette.
    - Update `--background` to `#fffaf4`.
    - Update `--foreground` to `#343450`.
    - Update `--primary` to `#113CA4`.
    - Adjust gradients to use the new primary blue `#113CA4`.

## Constraints
- **Copywriting**: ALL existing text content must remain unchanged.
- **Structure**: Website elements, layout, and component placement must remain intact.
- **Functionality**: Maintain current interactive behaviors and animations.
