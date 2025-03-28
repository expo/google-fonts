# @expo-google-fonts/red-hat-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/red-hat-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/red-hat-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/red-hat-display)

This package lets you use the [**Red Hat Display**](https://fonts.google.com/specimen/Red+Hat+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Red Hat Display

![Red Hat Display](./font-family.png)

This font family contains [14 styles](#-gallery).

- `RedHatDisplay_300Light`
- `RedHatDisplay_400Regular`
- `RedHatDisplay_500Medium`
- `RedHatDisplay_600SemiBold`
- `RedHatDisplay_700Bold`
- `RedHatDisplay_800ExtraBold`
- `RedHatDisplay_900Black`
- `RedHatDisplay_300Light_Italic`
- `RedHatDisplay_400Regular_Italic`
- `RedHatDisplay_500Medium_Italic`
- `RedHatDisplay_600SemiBold_Italic`
- `RedHatDisplay_700Bold_Italic`
- `RedHatDisplay_800ExtraBold_Italic`
- `RedHatDisplay_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/red-hat-display expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/red-hat-display/useFonts';
import { RedHatDisplay_300Light } from '@expo-google-fonts/red-hat-display/300Light';
import { RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display/400Regular';
import { RedHatDisplay_500Medium } from '@expo-google-fonts/red-hat-display/500Medium';
import { RedHatDisplay_600SemiBold } from '@expo-google-fonts/red-hat-display/600SemiBold';
import { RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display/700Bold';
import { RedHatDisplay_800ExtraBold } from '@expo-google-fonts/red-hat-display/800ExtraBold';
import { RedHatDisplay_900Black } from '@expo-google-fonts/red-hat-display/900Black';
import { RedHatDisplay_300Light_Italic } from '@expo-google-fonts/red-hat-display/300Light_Italic';
import { RedHatDisplay_400Regular_Italic } from '@expo-google-fonts/red-hat-display/400Regular_Italic';
import { RedHatDisplay_500Medium_Italic } from '@expo-google-fonts/red-hat-display/500Medium_Italic';
import { RedHatDisplay_600SemiBold_Italic } from '@expo-google-fonts/red-hat-display/600SemiBold_Italic';
import { RedHatDisplay_700Bold_Italic } from '@expo-google-fonts/red-hat-display/700Bold_Italic';
import { RedHatDisplay_800ExtraBold_Italic } from '@expo-google-fonts/red-hat-display/800ExtraBold_Italic';
import { RedHatDisplay_900Black_Italic } from '@expo-google-fonts/red-hat-display/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    RedHatDisplay_300Light, 
    RedHatDisplay_400Regular, 
    RedHatDisplay_500Medium, 
    RedHatDisplay_600SemiBold, 
    RedHatDisplay_700Bold, 
    RedHatDisplay_800ExtraBold, 
    RedHatDisplay_900Black, 
    RedHatDisplay_300Light_Italic, 
    RedHatDisplay_400Regular_Italic, 
    RedHatDisplay_500Medium_Italic, 
    RedHatDisplay_600SemiBold_Italic, 
    RedHatDisplay_700Bold_Italic, 
    RedHatDisplay_800ExtraBold_Italic, 
    RedHatDisplay_900Black_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_300Light"
        }}>
          Red Hat Display Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_400Regular"
        }}>
          Red Hat Display Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_500Medium"
        }}>
          Red Hat Display Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_600SemiBold"
        }}>
          Red Hat Display Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_700Bold"
        }}>
          Red Hat Display Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_800ExtraBold"
        }}>
          Red Hat Display Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_900Black"
        }}>
          Red Hat Display Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_300Light_Italic"
        }}>
          Red Hat Display Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_400Regular_Italic"
        }}>
          Red Hat Display Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_500Medium_Italic"
        }}>
          Red Hat Display Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_600SemiBold_Italic"
        }}>
          Red Hat Display Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_700Bold_Italic"
        }}>
          Red Hat Display Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_800ExtraBold_Italic"
        }}>
          Red Hat Display Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedHatDisplay_900Black_Italic"
        }}>
          Red Hat Display Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RedHatDisplay_300Light](./300Light/RedHatDisplay_300Light.ttf.png)|![RedHatDisplay_400Regular](./400Regular/RedHatDisplay_400Regular.ttf.png)|![RedHatDisplay_500Medium](./500Medium/RedHatDisplay_500Medium.ttf.png)||
|![RedHatDisplay_600SemiBold](./600SemiBold/RedHatDisplay_600SemiBold.ttf.png)|![RedHatDisplay_700Bold](./700Bold/RedHatDisplay_700Bold.ttf.png)|![RedHatDisplay_800ExtraBold](./800ExtraBold/RedHatDisplay_800ExtraBold.ttf.png)||
|![RedHatDisplay_900Black](./900Black/RedHatDisplay_900Black.ttf.png)|![RedHatDisplay_300Light_Italic](./300Light_Italic/RedHatDisplay_300Light_Italic.ttf.png)|![RedHatDisplay_400Regular_Italic](./400Regular_Italic/RedHatDisplay_400Regular_Italic.ttf.png)||
|![RedHatDisplay_500Medium_Italic](./500Medium_Italic/RedHatDisplay_500Medium_Italic.ttf.png)|![RedHatDisplay_600SemiBold_Italic](./600SemiBold_Italic/RedHatDisplay_600SemiBold_Italic.ttf.png)|![RedHatDisplay_700Bold_Italic](./700Bold_Italic/RedHatDisplay_700Bold_Italic.ttf.png)||
|![RedHatDisplay_800ExtraBold_Italic](./800ExtraBold_Italic/RedHatDisplay_800ExtraBold_Italic.ttf.png)|![RedHatDisplay_900Black_Italic](./900Black_Italic/RedHatDisplay_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/red-hat-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Red Hat Display page on Google Fonts](https://fonts.google.com/specimen/Red+Hat+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Red Hat Display on Google Fonts](https://fonts.google.com/specimen/Red+Hat+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/red-hat-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/red-hat-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
