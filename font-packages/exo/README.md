# @expo-google-fonts/exo

This package lets you use the [**Exo**](https://fonts.google.com/specimen/Exo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Exo

![Exo](./font-family.png)

This font family contains [18 styles](#gallery).

- `Exo_Thin100`
- `Exo_Thin100_Italic`
- `Exo_ExtraLight200`
- `Exo_ExtraLight200_Italic`
- `Exo_Light300`
- `Exo_Light300_Italic`
- `Exo_Regular400`
- `Exo_Regular400_Italic`
- `Exo_Medium500`
- `Exo_Medium500_Italic`
- `Exo_SemiBold600`
- `Exo_SemiBold600_Italic`
- `Exo_Bold700`
- `Exo_Bold700_Italic`
- `Exo_ExtraBold800`
- `Exo_ExtraBold800_Italic`
- `Exo_Black900`
- `Exo_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/exo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Exo_Thin100,
  Exo_Thin100_Italic,
  Exo_ExtraLight200,
  Exo_ExtraLight200_Italic,
  Exo_Light300,
  Exo_Light300_Italic,
  Exo_Regular400,
  Exo_Regular400_Italic,
  Exo_Medium500,
  Exo_Medium500_Italic,
  Exo_SemiBold600,
  Exo_SemiBold600_Italic,
  Exo_Bold700,
  Exo_Bold700_Italic,
  Exo_ExtraBold800,
  Exo_ExtraBold800_Italic,
  Exo_Black900,
  Exo_Black900_Italic,
} from '@expo-google-fonts/exo';

export default () => {
  let [fontsLoaded] = useFonts({
    Exo_Thin100,
    Exo_Thin100_Italic,
    Exo_ExtraLight200,
    Exo_ExtraLight200_Italic,
    Exo_Light300,
    Exo_Light300_Italic,
    Exo_Regular400,
    Exo_Regular400_Italic,
    Exo_Medium500,
    Exo_Medium500_Italic,
    Exo_SemiBold600,
    Exo_SemiBold600_Italic,
    Exo_Bold700,
    Exo_Bold700_Italic,
    Exo_ExtraBold800,
    Exo_ExtraBold800_Italic,
    Exo_Black900,
    Exo_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Thin100' }}>Exo_Thin100</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Thin100_Italic' }}>
          Exo_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_ExtraLight200' }}>
          Exo_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_ExtraLight200_Italic' }}>
          Exo_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Light300' }}>Exo_Light300</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Light300_Italic' }}>
          Exo_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Regular400' }}>
          Exo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Regular400_Italic' }}>
          Exo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Medium500' }}>
          Exo_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Medium500_Italic' }}>
          Exo_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_SemiBold600' }}>
          Exo_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_SemiBold600_Italic' }}>
          Exo_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Bold700' }}>Exo_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Bold700_Italic' }}>
          Exo_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_ExtraBold800' }}>
          Exo_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_ExtraBold800_Italic' }}>
          Exo_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Black900' }}>Exo_Black900</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Exo_Black900_Italic' }}>
          Exo_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Exo_Thin100
![Exo_Thin100](./2eda7d4b0bab32b1724ead985ca4ab23ba46b1647e60b50df836f3e142105e85.ttf.png)

##### Exo_Thin100_Italic
![Exo_Thin100_Italic](./5315edfaf9326a2112d609345e056a733da22ecf1c3aed8f0a78d51539300ec7.ttf.png)

##### Exo_ExtraLight200
![Exo_ExtraLight200](./b9271134900d316a8aa07b17a3850ad179e6c77b533419aad39926ab5fbbba5e.ttf.png)

##### Exo_ExtraLight200_Italic
![Exo_ExtraLight200_Italic](./58251d3b9daf7e91b2c9371c9800e0dbcd1374a54b0eee6b026a237c4d9fe63c.ttf.png)

##### Exo_Light300
![Exo_Light300](./bf846eb403540e7bfaae3e3975ff0577b88730403c02d4b2e57bb241e7294e1f.ttf.png)

##### Exo_Light300_Italic
![Exo_Light300_Italic](./278cc62e59aeca97f6e14f44ded0943df0201e7aa692faff1b40a9e6d7b22dc0.ttf.png)

##### Exo_Regular400
![Exo_Regular400](./ab24d45bd0887f54e98614ec395c5addfe82b0e8389b4721f5465954e1e2f060.ttf.png)

##### Exo_Regular400_Italic
![Exo_Regular400_Italic](./b79a6db3b900824a3c9cbd804a328bc0bd070b648e0615e9a45f5a5c0eb8dd63.ttf.png)

##### Exo_Medium500
![Exo_Medium500](./cb038971b993fa7fa126ed43d4dc54e20af90eeb8213b0c2a9c735a2c82c0d4e.ttf.png)

##### Exo_Medium500_Italic
![Exo_Medium500_Italic](./224493dbc8c8852c0a452618d375990f1383d43ba5f9f4726b4d87ec6c6f50c0.ttf.png)

##### Exo_SemiBold600
![Exo_SemiBold600](./754632bf7096e73d05f2e15e3f52a82b34201bad1aa105d6e650de745d120eda.ttf.png)

##### Exo_SemiBold600_Italic
![Exo_SemiBold600_Italic](./397a2c49640d1470bf9df914dfbbfa914148dd86642d25e248193a1f649b27dc.ttf.png)

##### Exo_Bold700
![Exo_Bold700](./3b0e87021af2542173d6c39db5a95d9e18ba59c0c9aa7ad37b6df04523947309.ttf.png)

##### Exo_Bold700_Italic
![Exo_Bold700_Italic](./75d249c747ae8332516fd6d2c3996d3f2c440f659339765dc8e13a97f942ad64.ttf.png)

##### Exo_ExtraBold800
![Exo_ExtraBold800](./5e5a390588a0eb152906de109ebd9c65d662628da5f1afbb3d17bd4a237c873d.ttf.png)

##### Exo_ExtraBold800_Italic
![Exo_ExtraBold800_Italic](./0c6ffd7e0358672dd7d40462c46a11562e062f1cab60d82d80b8a71737cb3141.ttf.png)

##### Exo_Black900
![Exo_Black900](./9d12eeaf10d56d2e39321c9d10253d25ccce5e188ab6684ec5eac5d7d9ac99be.ttf.png)

##### Exo_Black900_Italic
![Exo_Black900_Italic](./5a6cc3dfdcfe4e6990da4fa3f55a861ed2ae701a0ae1a30d30b23daafa215604.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Exo on Google Fonts](https://fonts.google.com/specimen/Exo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/exo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/exo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
