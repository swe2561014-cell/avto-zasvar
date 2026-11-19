"use strict";

/**
 * Засварын захиалгын нийт дүнг тооцно.
 * нийт = Σ үйлчилгээний үнэ + Σ (сэлбэгийн тоо × нэгж үнэ)
 */
function calcOrderTotal(services = [], parts = []) {
  const servicesSum = services.reduce((sum, s) => sum + s.price, 0);
  const partsSum = parts.reduce((sum, p) => sum + p.qty * p.unitPrice, 0);
  return servicesSum + partsSum;
}

module.exports = { calcOrderTotal };
