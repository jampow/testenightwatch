module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('http://panrotas.com.br')
      .useXpath()
      .click('//*[@id="navbar-collapse-main-menu"]/ul/li[2]/a')
      .useCss()
      .assert.containsText("[data-id='1032']", 'PANROTAS 1.346')
      .end();
  }
};
