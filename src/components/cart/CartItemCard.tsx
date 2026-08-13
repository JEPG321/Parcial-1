"use client";

import Image from "next/image";
import { Minus, Plus, Trash } from "@/components/ui/Icons";
import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/domain/entities/CartItem";

export function CartItemCard({ item }: { item: CartItem }) {
  const { dispatch } = useCart();

  return (
    <article className="flex gap-3 rounded-3xl border border-slate-800 bg-slate-900 p-3">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/8 bg-slate-950">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-2 text-sm font-semibold text-white">{item.name}</h3>
            <p className="mt-1 text-xs text-slate-400">{item.category}</p>
          </div>

          <button
            type="button"
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
            className="rounded-full border border-slate-700 p-2 text-slate-400 transition hover:border-rose-400 hover:text-rose-300"
            aria-label={`Eliminar ${item.name}`}
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950 p-1">
            <button
              type="button"
              onClick={() => dispatch({ type: "DECREMENT_ITEM", payload: item.id })}
              className="rounded-full p-2 text-slate-200 transition hover:bg-slate-800"
              aria-label={`Reducir cantidad de ${item.name}`}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-10 text-center text-sm font-semibold text-white">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => dispatch({ type: "INCREMENT_ITEM", payload: item.id })}
              className="rounded-full p-2 text-slate-200 transition hover:bg-slate-800"
              aria-label={`Aumentar cantidad de ${item.name}`}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">Subtotal</p>
            <p className="text-sm font-bold text-cyan-200">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
