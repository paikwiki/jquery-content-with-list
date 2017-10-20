;(function ($) {
    const settings = {}
  
    $.contentWithList = {
      init: function (settingsValue) {
        // default settings
        settings.msg = '<p>선택한 아이템이 없습니다.</p>'
  
        if (typeof settingValue === 'undefined') {
          settings.lc = '.list-container'
          settings.cc = '.content-container'
          return
        }
  
        settings.lc = 'listContainer' in settingsValue ? settingsValue.listContainer : '.list-container'
        settings.cc = 'contentContainer' in settingsValue ? settingsValue.contentContainer : '.content-container'
      },
      defaultMessage: function (msg) {
        settings.msg = msg
      },
      draw: function (cwlItems) {
        if (typeof cwlItems === 'undefined') {
          console.log('ERROR: draw 메소드에 파라미터를 전달해 주세요.')
          console.log('ERROR: 파라미터의 형태는 listItem과 contentItem 값을 가진 객체를 가진 배열입니다.')
  
          return
        } else if (!Array.isArray(cwlItems)) {
          console.log('ERROR: draw 메소드에 올바른 파라미터를 전달해 주세요. ')
          console.log('ERROR: 파라미터의 형태는 listItem과 contentItem, selected 값을 가진 객체를 가진 배열입니다.')
  
          return
        }
  
        const itemKeys = ['listItem', 'contentItem', 'selected']
        const listItems = []
        const contentItems = []
  
        cwlItems.forEach(function (i, idx) {
          if (itemKeys[0] in i && itemKeys[1] in i) {
            // list item 
            const lItem = $('<li>').addClass(`list-item list-item${idx+1}`)
            $(lItem).append(`<a href="">${i[itemKeys[0]]}</a>`)
  
            // content item
            const cItem = $('<div>').addClass(`content-item content-item${idx+1}`)
            $(cItem).append(`${i[itemKeys[1]]}`)
  
            // 선택 여부 확인
            if (itemKeys[2] in i && i[itemKeys[2]] === true) {
              listItems.forEach(function (i) {
                $(i).removeClass('selected')
              })
              contentItems.forEach(function (i) {
                $(i).removeClass('selected')
              })
              $(lItem).addClass('selected')
              $(cItem).addClass('selected')
            }
            listItems.push(lItem)
            contentItems.push(cItem)
          } else {
            console.log('ERROR: draw 메소드에 올바른 파라미터를 전달해 주세요. ')
            console.log('ERROR: 배열 안에는 반드시 listItem과 contentItem 값을 가진 객체가 있어야 합니다.')
  
            return
          }
        })
  
        // 리스트와 콘텐츠 화면에 뿌리기
        let cwlList = $('<ul>').addClass('cwl-list')
        $(cwlList).append(listItems)
        $(settings.lc).addClass('cwl-list-container').append(cwlList)
  
        let cwlContent = $('<div>').addClass('cwl-content')
        $(cwlContent).append(contentItems)
        // 선택된 메뉴가 없을 경우 보여주는 커버
        const contentCover = $('<div>')
        $(contentCover).append(settings.msg).addClass('content-item content-cover')
  
        $(settings.cc).addClass('cwl-content-container').append(cwlContent).append(contentCover)
  
        this.manipulation()
      },
      manipulation: function () {
        const lItem = $('.list-item')
        const cItem = $('.content-item')
  
        // 콘텐츠 중 선택된 것이 있는지 확인. 없을 경우 커버 노출
        if (!$(cItem).hasClass('selected')) {
          $('.content-cover').addClass('selected')
        }
        $(lItem).children('a').on('click', function (e) {
          e.preventDefault()
  
          // 리스트 아이템 조작
          const tLItemClass = '.' + ($(this).parent().attr('class')).match(/list-item[0-9]/).toString()
          
          $(lItem).removeClass('selected')
          $(tLItemClass).addClass('selected')
  
          // 콘텐츠 아이템 조작
          const tCItemClass = '.content-item' + (tLItemClass.match(/[0-9]/).toString())
          $(cItem).removeClass('selected')
          $(tCItemClass).addClass('selected')
        })
      }
    }
  })(jQuery)
  