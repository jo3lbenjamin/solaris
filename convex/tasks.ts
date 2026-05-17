import { mutation } from "./_generated/server";
import { v } from "convex/values";


export const create = mutation({
    args: { 
        name: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("projects", {
            name: args.name,
            ownerId: "123"
        })
    }
})