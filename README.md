# jQuery Content with List Plugin

jquery-content-with-list 플러그인은 콘텐츠를 탭 내비게이션 스타일로 보여주기 위한 플러그인입니다. 

jquery-content-with-list is a plugin to make content container with tab navigation style. 

## Usage

jQuery를 호출한 후, 아래와 같이 불러 옵니다.

Include it in your HTML after importing jQuery, like:

```html
    <script type="text/JavaScript" src="path/to/jquery.content-with-list.min.js" />
    <link rel="stylesheet" type="text/css" href="path/to/jquery.content-with-list.min.css">
```
	
이렇게 사용합니다:

Use it like:

```js
    const cwl = $.contentWithList;
    cwl.init();
    cwl.draw(obj);
```

생성시에 옵션 객체를 적용할 수 있습니다.

When it initiates, you can submit the options object like:

```js
	cwl.init({
        listContainer: "[CSS selector]"
        contentContainer: "[CSS selector]"
    });
```

`draw()` 메소드의 파라미터는 반드시 `listItem`과 `contentItem` 프로퍼티를 가진 객체를 가진 배열이어야 합니다. 불린 값으로 `selected` 프로퍼티를 전달해 플러그인이 실행된 후 처음으로 보여질 아이템을 선택할 수 있습니다. 아래는 `draw()` 메소드 파라미터의 예시입니다. 

```js
    const obj = [
        {
            listItem: 'Abet',
            contentItem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
            selected: true
        },
        {
            listItem: 'Betty',
            contentItem: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            selected: false
        },
        {
            listItem: 'Charlie',
            contentItem: 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            selected: false        
        },
        {
            listItem: 'David',
            contentItem: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            selected: false       
        }
    ];
```

배열 안의 요소 중 `selected` 값이 참인 객체는 하나만 있어야 하며, 둘 이상일 경우, 뒤에 위치한 요소가 참 값을 갖게 됩니다. `selected` 프로퍼티가 없거나, 프로퍼티가 있으나 참인 값이 하나도 없는 경우에는 선택된 아이템이 없다는 메시지가 나옵니다. 기본 문구는 `<p>선택한 아이템이 없습니다.</p>`입니다. 이 문구는 아래의 방법으로 변경할 수 있습니다.

```js
    cwl.defaultMessage('<h1>선택하세요.</h1><p>현재 선택한 항목이 없습니다.</p>');
```

## License
[MIT](https://opensource.org/licenses/MIT).
