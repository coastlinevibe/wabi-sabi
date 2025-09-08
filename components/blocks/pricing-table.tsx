"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"

export type PlanLevel = "foundation" | "growth" | "scale" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | "all" | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  price: number
  popular?: boolean
  description?: string
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  containerClassName?: string
  buttonClassName?: string
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "growth",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section
      className={cn(
        "bg-transparent text-foreground",
        "py-12 px-4",
        className
      )}
      {...props}
    >
      <div
        className={cn("w-full max-w-6xl mx-auto", containerClassName)}
      >

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 rounded-xl border transition-all duration-500",
                "bg-slate-800/30 backdrop-blur-sm",
                selectedPlan === plan.level
                  ? "border-amber-500/30 shadow-lg shadow-amber-500/5"
                  : "border-slate-700/50 hover:border-slate-600/70",
                plan.popular && "border-amber-500/40"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-slate-800/90 border border-amber-500/30 text-amber-400 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-200 mb-2 font-sora">{plan.name}</h3>
                {plan.description && (
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                )}
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-amber-400/90">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-slate-500 text-sm">
                      once-off
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => handlePlanSelect(plan.level)}
                  className={cn(
                    "w-full text-sm py-2",
                    selectedPlan === plan.level
                      ? "bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:bg-amber-500/30"
                      : "bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:bg-slate-600/50 hover:border-slate-500/70",
                    buttonClassName
                  )}
                  variant="outline"
                >
                  {selectedPlan === plan.level ? "Selected" : "Choose Plan"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="flex items-center p-5 bg-slate-800/30 border-b border-slate-700/30">
                <div className="flex-1 text-base font-medium text-slate-200">Features Comparison</div>
                <div className="flex items-center gap-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.level}
                      className={cn(
                        "w-24 text-center font-medium transition-all text-sm",
                        plan.level === selectedPlan 
                          ? "text-amber-400/90 bg-amber-500/10 rounded-lg py-1 px-2" 
                          : "text-slate-400"
                      )}
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center py-2 px-4 transition-colors border-b border-slate-700/20 last:border-b-0",
                    index % 2 === 0 ? "bg-slate-800/10" : "bg-transparent",
                    shouldShowCheck(feature.included, selectedPlan) && "bg-amber-500/5"
                  )}
                >
                  <div className={cn(
                    "flex-1 transition-colors text-sm",
                    shouldShowCheck(feature.included, selectedPlan) ? "text-amber-200/90" : "text-slate-300"
                  )}>
                    {feature.name}
                  </div>
                  <div className="flex items-center gap-8">
                    {plans.map((plan) => (
                      <div
                        key={plan.level}
                        className={cn(
                          "w-24 flex justify-center transition-all",
                          plan.level === selectedPlan && "bg-amber-500/10 rounded-md py-1"
                        )}
                      >
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <CheckIcon className={cn(
                            "w-4 h-4 transition-colors",
                            plan.level === selectedPlan ? "text-amber-400/90" : "text-green-400/80"
                          )} />
                        ) : (
                          <span className="text-slate-600/70 text-sm">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string,
): boolean {
  if (included === "all") return true
  if (included === "scale" && (level === "scale")) return true
  if (included === "growth" && (level === "growth" || level === "scale")) return true
  if (included === "foundation" && (level === "foundation" || level === "growth" || level === "scale")) return true
  return false
}
