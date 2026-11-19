"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { calcOrderTotal } = require("../src/orderTotal");

test("101-р захиалга: тос солих + моторын тос + шүүлтүүр = 95000", () => {
  const services = [{ price: 45000 }];
  const parts = [{ qty: 1, unitPrice: 38000 }, { qty: 1, unitPrice: 12000 }];
  assert.equal(calcOrderTotal(services, parts), 95000);
});

test("Сэлбэггүй захиалга: зөвхөн үйлчилгээний дүн", () => {
  assert.equal(calcOrderTotal([{ price: 30000 }, { price: 60000 }], []), 90000);
});

test("Хоосон захиалга: 0", () => {
  assert.equal(calcOrderTotal(), 0);
});

test("Сэлбэгийн тоо нэгж үнээр үржигдэнэ", () => {
  assert.equal(calcOrderTotal([], [{ qty: 4, unitPrice: 260000 }]), 1040000);
});
