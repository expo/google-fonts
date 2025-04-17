# @expo-google-fonts/winky-rough

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/winky-rough)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/winky-rough)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/winky-rough)

This package lets you use the [**Winky Rough**](https://fonts.google.com/specimen/Winky+Rough) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Winky Rough

![Winky Rough](./font-family.png)

This font family contains [14 styles](#-gallery).

- `WinkyRough_300Light`
- `WinkyRough_400Regular`
- `WinkyRough_500Medium`
- `WinkyRough_600SemiBold`
- `WinkyRough_700Bold`
- `WinkyRough_800ExtraBold`
- `WinkyRough_900Black`
- `WinkyRough_300Light_Italic`
- `WinkyRough_400Regular_Italic`
- `WinkyRough_500Medium_Italic`
- `WinkyRough_600SemiBold_Italic`
- `WinkyRough_700Bold_Italic`
- `WinkyRough_800ExtraBold_Italic`
- `WinkyRough_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/winky-rough expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/winky-rough/useFonts';
import { WinkyRough_300Light } from '@expo-google-fonts/winky-rough/300Light';
import { WinkyRough_400Regular } from '@expo-google-fonts/winky-rough/400Regular';
import { WinkyRough_500Medium } from '@expo-google-fonts/winky-rough/500Medium';
import { WinkyRough_600SemiBold } from '@expo-google-fonts/winky-rough/600SemiBold';
import { WinkyRough_700Bold } from '@expo-google-fonts/winky-rough/700Bold';
import { WinkyRough_800ExtraBold } from '@expo-google-fonts/winky-rough/800ExtraBold';
import { WinkyRough_900Black } from '@expo-google-fonts/winky-rough/900Black';
import { WinkyRough_300Light_Italic } from '@expo-google-fonts/winky-rough/300Light_Italic';
import { WinkyRough_400Regular_Italic } from '@expo-google-fonts/winky-rough/400Regular_Italic';
import { WinkyRough_500Medium_Italic } from '@expo-google-fonts/winky-rough/500Medium_Italic';
import { WinkyRough_600SemiBold_Italic } from '@expo-google-fonts/winky-rough/600SemiBold_Italic';
import { WinkyRough_700Bold_Italic } from '@expo-google-fonts/winky-rough/700Bold_Italic';
import { WinkyRough_800ExtraBold_Italic } from '@expo-google-fonts/winky-rough/800ExtraBold_Italic';
import { WinkyRough_900Black_Italic } from '@expo-google-fonts/winky-rough/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    WinkyRough_300Light, 
    WinkyRough_400Regular, 
    WinkyRough_500Medium, 
    WinkyRough_600SemiBold, 
    WinkyRough_700Bold, 
    WinkyRough_800ExtraBold, 
    WinkyRough_900Black, 
    WinkyRough_300Light_Italic, 
    WinkyRough_400Regular_Italic, 
    WinkyRough_500Medium_Italic, 
    WinkyRough_600SemiBold_Italic, 
    WinkyRough_700Bold_Italic, 
    WinkyRough_800ExtraBold_Italic, 
    WinkyRough_900Black_Italic
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
          fontFamily: "WinkyRough_300Light"
        }}>
          Winky Rough Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_400Regular"
        }}>
          Winky Rough Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_500Medium"
        }}>
          Winky Rough Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_600SemiBold"
        }}>
          Winky Rough Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_700Bold"
        }}>
          Winky Rough Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_800ExtraBold"
        }}>
          Winky Rough Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_900Black"
        }}>
          Winky Rough Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_300Light_Italic"
        }}>
          Winky Rough Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_400Regular_Italic"
        }}>
          Winky Rough Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_500Medium_Italic"
        }}>
          Winky Rough Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_600SemiBold_Italic"
        }}>
          Winky Rough Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_700Bold_Italic"
        }}>
          Winky Rough Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_800ExtraBold_Italic"
        }}>
          Winky Rough Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "WinkyRough_900Black_Italic"
        }}>
          Winky Rough Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![WinkyRough_300Light](./300Light/WinkyRough_300Light.ttf.png)|![WinkyRough_400Regular](./400Regular/WinkyRough_400Regular.ttf.png)|![WinkyRough_500Medium](./500Medium/WinkyRough_500Medium.ttf.png)||
|![WinkyRough_600SemiBold](./600SemiBold/WinkyRough_600SemiBold.ttf.png)|![WinkyRough_700Bold](./700Bold/WinkyRough_700Bold.ttf.png)|![WinkyRough_800ExtraBold](./800ExtraBold/WinkyRough_800ExtraBold.ttf.png)||
|![WinkyRough_900Black](./900Black/WinkyRough_900Black.ttf.png)|![WinkyRough_300Light_Italic](./300Light_Italic/WinkyRough_300Light_Italic.ttf.png)|![WinkyRough_400Regular_Italic](./400Regular_Italic/WinkyRough_400Regular_Italic.ttf.png)||
|![WinkyRough_500Medium_Italic](./500Medium_Italic/WinkyRough_500Medium_Italic.ttf.png)|![WinkyRough_600SemiBold_Italic](./600SemiBold_Italic/WinkyRough_600SemiBold_Italic.ttf.png)|![WinkyRough_700Bold_Italic](./700Bold_Italic/WinkyRough_700Bold_Italic.ttf.png)||
|![WinkyRough_800ExtraBold_Italic](./800ExtraBold_Italic/WinkyRough_800ExtraBold_Italic.ttf.png)|![WinkyRough_900Black_Italic](./900Black_Italic/WinkyRough_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/winky-rough` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Winky Rough page on Google Fonts](https://fonts.google.com/specimen/Winky+Rough) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Winky Rough on Google Fonts](https://fonts.google.com/specimen/Winky+Rough)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/winky-rough)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/winky-rough)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
