<p align="center">
  <b>React Read More</b> is a simple, fully customizable component which gives you the ability to truncate a large text, by line, character or word count.
</p>

## Install

```bash
$ npm install react-readmore --save-dev
```

## Test

You can test the functionality of the app by going to  
`https://react-read-more.sstraatemans.vercel.app/`

## Usage

---

### Basic

```js
import ReadMore from 'react-readmore';
const App: React.FC = () => {
    return <ReadMore maxLines="{3}">Lorem ipsum dolor sit amet, consectetur...</ReadMore>;
};
```

### Style button

```js
import ReadMore from 'react-readmore';
const App: React.FC = () => {
    return (
        <ReadMore maxLines="{3}" buttonClassName="class-name">
            Lorem ipsum dolor sit amet, consectetur...
        </ReadMore>
    );
};
```

### overwrite ellipsis

```js
import ReadMore from 'react-readmore';
const App: React.FC = () => {
    return (
        <ReadMore maxLines="{3}" ellipsis="***">
            Lorem ipsum dolor sit amet, consectetur...
        </ReadMore>
    );
};
```

### overwrite label names

```js
import ReadMore from 'react-readmore';
const App: React.FC = () => {
    return (
        <ReadMore maxLines="{3}" readMoreLabel="Lees meer" readLessLabel="Lees minder">
            Lorem ipsum dolor sit amet, consectetur...
        </ReadMore>
    );
};
```

### Parameters

| Name            | Description                                   | Type   | Default value |
| --------------- | :-------------------------------------------- | :----- | :------------ |
| maxCharacters   | the max. amount of characters before truncate | number | null          |
| maxLines        | the max. amount of lines before truncate      | number | null          |
| maxWords        | the max. amount of words before truncate      | number | null          |
| ellipsis        | the ellipsis                                  | string | `...`         |
| readMoreLabel   | the label of the read more button             | string | `read more`   |
| readLessLabel   | the label of the read less button             | string | `read less`   |
| buttonClassName | the classname to style the button             | string | null          |

Either MaxWords, MaxCharacters or MaxLines is mandatory

## License

react-readmore is licensed under the MIT license.
