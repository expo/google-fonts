# @expo-google-fonts/dm-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/dm-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/dm-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/dm-sans)

This package lets you use the [**DM Sans**](https://fonts.google.com/specimen/DM+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## DM Sans

![DM Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `DMSans_100Thin`
- `DMSans_200ExtraLight`
- `DMSans_300Light`
- `DMSans_400Regular`
- `DMSans_500Medium`
- `DMSans_600SemiBold`
- `DMSans_700Bold`
- `DMSans_800ExtraBold`
- `DMSans_900Black`
- `DMSans_100Thin_Italic`
- `DMSans_200ExtraLight_Italic`
- `DMSans_300Light_Italic`
- `DMSans_400Regular_Italic`
- `DMSans_500Medium_Italic`
- `DMSans_600SemiBold_Italic`
- `DMSans_700Bold_Italic`
- `DMSans_800ExtraBold_Italic`
- `DMSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/dm-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/dm-sans/useFonts';
import { DMSans_100Thin } from '@expo-google-fonts/dm-sans/100Thin';
import { DMSans_200ExtraLight } from '@expo-google-fonts/dm-sans/200ExtraLight';
import { DMSans_300Light } from '@expo-google-fonts/dm-sans/300Light';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans/400Regular';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { DMSans_600SemiBold } from '@expo-google-fonts/dm-sans/600SemiBold';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSans_800ExtraBold } from '@expo-google-fonts/dm-sans/800ExtraBold';
import { DMSans_900Black } from '@expo-google-fonts/dm-sans/900Black';
import { DMSans_100Thin_Italic } from '@expo-google-fonts/dm-sans/100Thin_Italic';
import { DMSans_200ExtraLight_Italic } from '@expo-google-fonts/dm-sans/200ExtraLight_Italic';
import { DMSans_300Light_Italic } from '@expo-google-fonts/dm-sans/300Light_Italic';
import { DMSans_400Regular_Italic } from '@expo-google-fonts/dm-sans/400Regular_Italic';
import { DMSans_500Medium_Italic } from '@expo-google-fonts/dm-sans/500Medium_Italic';
import { DMSans_600SemiBold_Italic } from '@expo-google-fonts/dm-sans/600SemiBold_Italic';
import { DMSans_700Bold_Italic } from '@expo-google-fonts/dm-sans/700Bold_Italic';
import { DMSans_800ExtraBold_Italic } from '@expo-google-fonts/dm-sans/800ExtraBold_Italic';
import { DMSans_900Black_Italic } from '@expo-google-fonts/dm-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    DMSans_100Thin, 
    DMSans_200ExtraLight, 
    DMSans_300Light, 
    DMSans_400Regular, 
    DMSans_500Medium, 
    DMSans_600SemiBold, 
    DMSans_700Bold, 
    DMSans_800ExtraBold, 
    DMSans_900Black, 
    DMSans_100Thin_Italic, 
    DMSans_200ExtraLight_Italic, 
    DMSans_300Light_Italic, 
    DMSans_400Regular_Italic, 
    DMSans_500Medium_Italic, 
    DMSans_600SemiBold_Italic, 
    DMSans_700Bold_Italic, 
    DMSans_800ExtraBold_Italic, 
    DMSans_900Black_Italic
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
          fontFamily: "DMSans_100Thin"
        }}>
          DM Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_200ExtraLight"
        }}>
          DM Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_300Light"
        }}>
          DM Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_400Regular"
        }}>
          DM Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_500Medium"
        }}>
          DM Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_600SemiBold"
        }}>
          DM Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_700Bold"
        }}>
          DM Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_800ExtraBold"
        }}>
          DM Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_900Black"
        }}>
          DM Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_100Thin_Italic"
        }}>
          DM Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_200ExtraLight_Italic"
        }}>
          DM Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_300Light_Italic"
        }}>
          DM Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_400Regular_Italic"
        }}>
          DM Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_500Medium_Italic"
        }}>
          DM Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_600SemiBold_Italic"
        }}>
          DM Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_700Bold_Italic"
        }}>
          DM Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_800ExtraBold_Italic"
        }}>
          DM Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_900Black_Italic"
        }}>
          DM Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![DMSans_100Thin](./100Thin/DMSans_100Thin.ttf.png)|![DMSans_200ExtraLight](./200ExtraLight/DMSans_200ExtraLight.ttf.png)|![DMSans_300Light](./300Light/DMSans_300Light.ttf.png)||
|![DMSans_400Regular](./400Regular/DMSans_400Regular.ttf.png)|![DMSans_500Medium](./500Medium/DMSans_500Medium.ttf.png)|![DMSans_600SemiBold](./600SemiBold/DMSans_600SemiBold.ttf.png)||
|![DMSans_700Bold](./700Bold/DMSans_700Bold.ttf.png)|![DMSans_800ExtraBold](./800ExtraBold/DMSans_800ExtraBold.ttf.png)|![DMSans_900Black](./900Black/DMSans_900Black.ttf.png)||
|![DMSans_100Thin_Italic](./100Thin_Italic/DMSans_100Thin_Italic.ttf.png)|![DMSans_200ExtraLight_Italic](./200ExtraLight_Italic/DMSans_200ExtraLight_Italic.ttf.png)|![DMSans_300Light_Italic](./300Light_Italic/DMSans_300Light_Italic.ttf.png)||
|![DMSans_400Regular_Italic](./400Regular_Italic/DMSans_400Regular_Italic.ttf.png)|![DMSans_500Medium_Italic](./500Medium_Italic/DMSans_500Medium_Italic.ttf.png)|![DMSans_600SemiBold_Italic](./600SemiBold_Italic/DMSans_600SemiBold_Italic.ttf.png)||
|![DMSans_700Bold_Italic](./700Bold_Italic/DMSans_700Bold_Italic.ttf.png)|![DMSans_800ExtraBold_Italic](./800ExtraBold_Italic/DMSans_800ExtraBold_Italic.ttf.png)|![DMSans_900Black_Italic](./900Black_Italic/DMSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/dm-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [DM Sans page on Google Fonts](https://fonts.google.com/specimen/DM+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [DM Sans on Google Fonts](https://fonts.google.com/specimen/DM+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dm-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dm-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
