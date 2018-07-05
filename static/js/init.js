  var ___isHomepage = location.pathname==='/';

  $(function() {

    var body  = document.body;
    var $scrollElement = $('html, body');
  
    var scrollElement = document.documentElement;
  
    // topbar阴影
    var topbar       = $('#topbar');
    var topbarHeight = topbar.height();
    var vh           = body.clientHeight - topbarHeight;
    var bannerHeight = vh - 50;
    var topbarSetted = false;
  
    var scrollTop    = 0,
        scrollHei    = (document.documentElement.scrollHeight || document.body.scrollHeight) - vh - topbarHeight;
  
    function toggleTopbarMask(e) {
      if ( isCollapsed ) {
        scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // scrollTop = getScrollTop();
        // topbar.css('background', 'rgba(15,20,33,'+(scrollTop/scrollHei*2)+')')
        topbar.css('background', 'rgba(15,20,33,'+(scrollTop/vh)+')')
      }
    }
  
    // 窗口尺寸变动
    var resizeTimer = 0;
    function windowResize() {
      clearTimeout( resizeTimer );
      resizeTimer = setTimeout(function() {
        vh = body.clientHeight - topbar.height();
      }, 300);
    }
  
    // 锚点跳转
    var stopFocusNav = false;
    var isCollapsed = true;
    topbar.on('click', 'a', function(e) {
      if ( !___isHomepage ) return;
      var a = $(this);
      if ( a.hasClass('menuSwitch') ) {
        if ( topbar.hasClass('collapsed') ) {
          topbar.attr('style', 'background:#0f1421');
          isCollapsed = false;
        } else {
          isCollapsed = true;
          toggleTopbarMask();
        }
        topbar.toggleClass('collapsed');
        return;
      }
      
      if ( a.data('anchor') ) {
        var t = $('#'+a.data('anchor')).position().top - topbarHeight;
        anchor.removeClass("focus");
        anchor = a.addClass('focus');
        stopFocusNav = true;
        $scrollElement.stop().animate({scrollTop:t<0?0:t}, 300, function(e) {
          stopFocusNav = false;
          isCollapsed = true;
        });
      } else {
        stopFocusNav = false;
        isCollapsed = true;
        toggleTopbarMask();
      }
      if ( a.hasClass('btn-lang') ) {
        getPanelPoses();
        highlightPanels();
        dynamicAnchorMap();
      }
      topbar.addClass('collapsed');
    });
    $('#footer').on('click', 'a', function(e) {
      if ( !___isHomepage ) return;
      var a = $(this);
      if ( a.data('anchor') ) {
        var t = $('#'+a.data('anchor')).position().top - topbarHeight;
        anchor.removeClass("focus");
        anchor = a.addClass('focus');
        stopFocusNav = true;
        $scrollElement.stop().animate({scrollTop:t<0?0:t}, 300, function(e) {
          stopFocusNav = false;
          isCollapsed = true;
        });
      } else {
        stopFocusNav = false;
        isCollapsed = true;
        toggleTopbarMask();
      }
    })
  
    // 锚点映射
    var navs    = topbar.find('a[data-anchor]');
    var anchor  = $();
    var anchors = [].map.call($(body).find('div.anchor'), function(a, i) { 
      return { name:a.id, top:$(a).position().top, elem:navs.eq(i) };
    });
    var dynamicAnchorMapTimer = -1;
    var scrollHeight = document.body.scrollHeight - vh - topbarHeight;
    function dynamicAnchorMap(e) {
      if ( stopFocusNav ) return;
      clearTimeout( dynamicAnchorMapTimer );
      dynamicAnchorMapTimer = setTimeout(function() {
        scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        anchor.removeClass("focus");
        anchor = getNearestAnchor( scrollTop >= scrollHeight? anchors[anchors.length-1].top: scrollTop );
        anchor.addClass('focus');
      }, 200);
    }
    function getNearestAnchor(t) {
      t = t===0? 0: t+topbarHeight;
      for(var a,i=0,len=anchors.length; i<len; i++) {
        a = anchors[i];
        if ( a.top >= t ) {
          break;
        }
      }
      return a.elem;
    }
  
    if ( ___isHomepage ) {
      // 事件绑定
      $(window)
        .on('scroll', dynamicAnchorMap)
        .on('resize', windowResize);
      $(window).on('scroll', toggleTopbarMask);
      toggleTopbarMask();
    }
    if ( window._platform === 'pc' ) {
    }
    // 下载
    $('#white-book').on('click', 'a', function(e) {
      return;
      var url = 'http://123.207.38.182:8001/img/t1.png';
      
      /**
       * 使用form表单来发送请求
       * 1.method属性用来设置请求的类型——post还是get
       * 2.action属性用来设置请求路径。
       * 
       */
      var form=$("<form>");//定义一个form表单
      form.attr("style","display:none");
      form.attr("target","");
      form.attr("method","get");  //请求类型
      form.attr("action",url);   //请求地址
      $("body").append(form);//将表单放置在web中
      
      　　/**
       * input标签主要用来传递请求所需的参数：
       *
       * 1.name属性是传递请求所需的参数名.
       * 2.value属性是传递请求所需的参数值.
       *
       * 3.当为get类型时，请求所需的参数用input标签来传递，直接写在URL后面是无效的。
       * 4.当为post类型时，queryString参数直接写在URL后面，formData参数则用input标签传递
       *       有多少数据则使用多少input标签
       *
       */
      // var tt = new Date().getTime();
      // var input1=$("<input>");
      // input1.attr("type","hidden");
      // input1.attr("name","tt");
      // input1.attr("value",tt);
      // form.append(input1);
  
      // var input2=$("<input>");
      // input2.attr("type","hidden");
      // input2.attr("name","companyId");
      // input2.attr("value",companyId);
      // form.append(input2);
  
      form.submit();//表单提交
    });
  
    
    // 团队 hover
    var members = $('#team .avatar .item');
    var intros  = $('#team .intro p');
    var focusMember= members.filter('.focus');
    var shownIntro = intros.filter('.show');
    if ( window._platform === 'pc' ) {
      members.hover(function() {
        focusMember.removeClass('focus');
        shownIntro.removeClass('show');
        focusMember = $(this).addClass('focus');
        shownIntro  = intros.eq( focusMember.index() ).addClass('show');
      });
    } else {
      members.addClass('focus');
    }
  
    if ( ___isHomepage ) {
      console.log('初始化')
      toggleTopbarMask();
      dynamicAnchorMap();
    } else {
      console.log('初始化222222222222');
    }
  });
  
  
  // 消息提醒
  $(function() {
    return;
    var dialog = $('#dialog-msg'),
        inner  = dialog.find('.inner-wrapper'),
        timer  = -1,
        text   = '';
  
    function show() {
      dialog.removeClass('fadeOut').addClass('fadeIn');
      inner.text(text);
    }
    function hide() {
      dialog.removeClass('fadeIn').addClass('fadeOut');
      inner.text('');
    }
  
    window.showMsg = function(opt) {
      opt = opt || {};
      text  = opt.text;
      clearTimeout( timer );
      timer = setTimeout(hide, opt.duration || 2000);
      show();
    }
  });
  // 表单提交
  $(function() {
    return;
    var dialog         = $('#dialog-raising');
    var form           = dialog.find('form');
    var items          = form.find('input, textarea');
    var submitable     = true;
    var $item          = null;
    var $parent        = null;
    var formData       = '';
  
    function inputEvn(e,target) {
      target = e.target;
      if ( target.type==='checkbox'? target.checked: target.value.trim() ) {
        $(target.parentNode).removeClass('invalid');
        if ( ![].some.call(requiredInput, function(item,i) {
          return item.type==='checkbox'? !item.checked :!item.value.trim()
        })) {
          btnSubmit.removeClass('disabled');
        }
      } else {
        btnSubmit.addClass('disabled');
        $(target.parentNode).addClass('invalid');
      }
    }
  
    var requiredInput = items.filter('[required]');
    requiredInput.each(function(i,item) {
      item.addEventListener(item.type==='checkbox'?'change':'input', inputEvn);
    });
  
    // 提交事件
    var btnSubmit = $('#raising-submit');
    btnSubmit.on('click', function(e) {
      // formData = new FormData();
      formData = {};
      items.each(function(i,item) {
        // if ( !submitable ) return;
        $item       = $(item);
        $parent     = $item.parent();
  
        // 如果是必填项
        if ( item.required ) {
          // 如果必填项没填或则不符合规则,则不执行提交,并显示警告
          if ( 
            ( $item.data('regexp-parrent')? matchRegExp($item): false )
            || (item.type==='checkbox'? !item.checked :!item.value.trim())
          ) {
            submitable = false;
            $parent.addClass('invalid');
            return;
          } else {
            $parent.removeClass('invalid');
          }
        }
  
        if ( !item.value ) return;
  
        // 序列化要提交的数据
        if ( item.type==='file' ) {
          // formData.append(item.name, item.files[0]);
          // formData[item.name] = item.files[0];
        } else if (item.type==='checkbox') {
          // formData.append(item.name, item.checked);
        } else {
          // formData.append(item.name, item.value);
          formData[item.name] = item.value;
        }
      });
  
      // 是否可以提交
      if ( submitable ) {
        doPost();
      }
      submitable = true;
    });
  
    // 打开弹窗
    $('.showRaising').on('click', function(e) {
      $('#raising-result-wrapper').removeClass('failure success');
      $('#raising-fill-wrapper').show();
      items.each(function(i,item) {
        item.type==='checkbox'?
          item.checked=false:
          item.value='';
      });
      btnSubmit.addClass('disabled');
      dialog.addClass('show');
    });
    // dialog.addClass('show');
    // 关闭弹窗
    dialog.on('click', function(e) {
      if ( e.target===dialog[0] || $(e.target).hasClass('btn-close') ) {
        dialog.removeClass('show');
      }
    });
  
    // 发送数据
    var submiting = false;
    function doPost() {
      if ( submiting ) return;
      submiting = true;
      $.ajax({
        url:'http://bot.valp.io/survey/register', 
        type:'POST',
        data:formData, 
        success:function(resp) {
          if ( resp.state == 1 ) {
            postSuccessfully()
          } else {
            postUnsuccessfully();
          }
        },
        timeout: postUnsuccessfully,
        error: postUnsuccessfully,
      });
    }
  
    // 发送后处理
    function postSuccessfully() {
      $('#raising-fill-wrapper').hide();
      $('#raising-result-wrapper').removeClass('failure').addClass('success').show();
      submiting = false;
    }
    function postUnsuccessfully() {
      $('#raising-fill-wrapper').hide();
      $('#raising-result-wrapper').removeClass('success').addClass('failure').show();
      submiting = false;
    }
    function matchRegExp($item) {
      return !new RegExp($item.data('regexp-parrent'), $item.data('regexp-attribute')||'').test($item.val().trim())
    }
  });



  var getScrollTop = window.scrollTop = function() {
    if ( document.documentElement.scrollTop || document.body.scrollTop ) {
      getScrollTop = (function() {
          return this.scrollTop;
      }).bind(document.documentElement.scrollTop? document.documentElement: document.body);
      return getScrollTop();
    } else {
      return 0;
    }
  }
  var screenHei  = 0;
  var panelPoses = null;
  var panels = $('#page-home .panel');
  var scrollTimer = -1;

  function getPanelPoses() {
    screenHei  = document.documentElement.clientHeight;
    panelPoses = [];
    panels.each(function(i, p) {
      panelPoses.push( {name:p.parentNode.id, top:p.parentNode.offsetTop, height:p.clientHeight} )
    });
    roadmapTop = panelPoses[roadmap.index()].top;
  }
  var roadmap = $('#roadmap');
  var roadmapTop;
  var hasAlertifyAppeared = false;
  function highlightPanels() {
    panelPoses.forEach(function(p, i, top) {
      top = getScrollTop()+screenHei-200;
      if ( top > p.top && top < p.top+p.height+screenHei ) {
        panels.eq(i).addClass('highlight').css({'opacity':1, 'transform':'scale(1)'});
      } else {
        panels.eq(i).removeClass('highlight');
      }
      if ( hasAlertifyAppeared || top<roadmapTop ) return;
      else if (location.pathname==='/' && !document.querySelector('#alertify-fixed-para')) {
        hasAlertifyAppeared = true;
        alertify.message(
          '<p id="alertify-fixed-para" >Make new friends! </p>'
          +'<a id="alertify-fixed-btn" href="https://t.me/vpp_offical3" target="_blank">'
            + window._community.btn
          + '</a>'
        , 0)
      }
    });
  }

  // 动效
  $(function() {
    if ( !___isHomepage ) return;
    getPanelPoses();
    $(window)
    .on('scroll', function(e) {
      clearTimeout( scrollTimer );
      scrollTimer = setTimeout(highlightPanels, 30);
    })
    .on('resize', getPanelPoses)
    .on('load', function() {
      getPanelPoses();
      highlightPanels();
    })
  })
