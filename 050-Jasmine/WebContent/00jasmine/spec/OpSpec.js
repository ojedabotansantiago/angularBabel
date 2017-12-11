describe("Operaciones Aritmeticas", function() {

	describe("Con la operacion de suma", function() {

		it("Cuando sumo dos numeros positivos obtengo un numero positivo",
				function() {
					expect(suma(2, 3)).toBe(5);
				});

		it("Cuando sumo un numero y cero obtengo el mismo numero", function() {
			expect(suma(3, 0)).toBe(suma(0, 3));
			expect(suma(0, 3)).toBe(3);
		});

	});

	describe("Con la operacion de resta", function() {

		it("Obtener numero negativo con resta", function() {
			expect(resta(3, 7)).toBe(-4);
		});

		it("Obtengo el mismo numero si resto 0", function() {
			var a = 7;
			expect(resta(a, 0)).toBe(a);
		});

	});

	describe("Con la operacion de multiplicacion", function() {

		it("Obtener resultado cuando multiplico dos numeros", function() {
			expect(multiplica(3, 4)).toBe(12);
		});

		it("Obtener 0 cuando multiplico cualquier numero por 0", function() {
			expect(multiplica(0, 4)).toBe(0);
		});

		it("Obtener numero positivo cuando multiplico dos numeros negativos",
				function() {
					expect(multiplica(-1, -2)).toBe(2);
				});
	});

	describe("Con la operacion de division", function() {
		it("Obtener resultado cuando divido dos numeros", function() {
			expect(divide(4, 2)).toBe(2);
		});
	});

});
