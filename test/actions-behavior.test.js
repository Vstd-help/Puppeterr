const test = require('node:test');
const assert = require('node:assert/strict');
const actions = require('../actions');

function withDocument(value, callback) {
  const previous = global.document;
  global.document = value;
  try {
    return callback();
  } finally {
    if (previous === undefined) {
      delete global.document;
    } else {
      global.document = previous;
    }
  }
}

test('evaluate accepts bare return statements without throwing Illegal return statement', async () => {
  await withDocument({ title: 'Example page' }, async () => {
    const page = {
      evaluate: async (fn) => fn()
    };

    const result = await actions.evaluate({ page, script: 'return document.title;' });
    assert.equal(result, 'Example page');
  });
});

test('evaluate accepts arrow functions and returns their resolved value', async () => {
  await withDocument({ title: 'Arrow result' }, async () => {
    const page = {
      evaluate: async (fn) => fn()
    };

    const result = await actions.evaluate({ page, script: '() => document.title' });
    assert.equal(result, 'Arrow result');
  });
});

test('waitForURLChange accepts content change as success when URL stays stable', async () => {
  let currentUrl = 'https://example.com/search';
  let currentText = 'old page content';
  let waited = 0;

  const page = {
    url: () => currentUrl,
    waitForTimeout: async () => {
      waited += 1;
      if (waited === 1) {
        currentText = 'new hydrated page content after submit';
      }
    },
    evaluate: async () => currentText
  };

  const result = await actions.waitForURLChange({ page, currentURL: currentUrl, timeout: 200 });
  assert.equal(result, 'content-changed:page-hydrated');
  assert.ok(waited >= 1);
});
