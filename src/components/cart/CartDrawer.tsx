"use client";

import { CartItemCard } from "@/components/cart/CartItemCard";
import { CartSummary } from "@/components/cart/CartSummary";
import { Close } from "@/components/ui/Icons";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const { items, isOpen, dispatch } = useCart();

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "CLOSE_CART" })}
        aria-label="Cerrar carrito"
        className={`fixed inset-0 z-40 bg-slate-950/65 backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.98))] shadow-2xl shadow-black/50 transition-transform duration-300 sm:max-w-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Tu carrito
            </p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Lista de compra
            </h2>
          </div>

          <button
            type="button"
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-300 hover:text-white"
            aria-label="Cerrar carrito"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Aun no agregas productos
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                Explora el catalogo y agrega componentes para ver el total dinamico aqui.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-white/10 px-5 py-5 sm:px-6">
          <CartSummary />
        </div>
      </aside>
    </>
  );
}
