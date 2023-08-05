import { expect, test } from '@playwright/test';
import sanitizeHTMLContent from '../../../src/components/SanitizeHTMLContent.ts';

test.describe('sanitizeHTMLContent_function', () => {
  // Tests that passing a non-null and defined string as content returns a sanitized HTML string
  test('test_passing_non_null_defined_string', () => {
    const content = '<script>alert("XSS attack")</script>';
    const expected = null;
    const result = sanitizeHTMLContent({ content });
    expect(result).toEqual(expected);
  });
  // Tests that passing null as content throws an error
  test('passing_null_should_throw_error', () => {
    expect(() => {
      sanitizeHTMLContent({ content: null });
    }).toThrow('Content cannot be null');
  });
  // Tests that passing undefined as content throws an error
  test('passing_undefined_should_throw_error', () => {
    expect(() => {
      sanitizeHTMLContent({ content: undefined });
    }).toThrow('Content cannot be undefined');
  });
  // Tests that passing an empty string as content returns an empty string
  test('test_passing_empty_string', () => {
    const result = sanitizeHTMLContent({ content: '' });
    expect(result).toBe(null);
  });
  // Tests that passing a string with malicious script tags as content returns a sanitized HTML string
  test('test_malicious_script_tags', () => {
    const content = '<script>alert("Hello!")</script>';
    const expected = null;
    const result = sanitizeHTMLContent({ content });
    expect(result).toEqual(expected);
  });
});
