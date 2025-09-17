-- Add missing RLS policies for order_items and payments tables

-- Order items policies
CREATE POLICY "Customers can view their own order items" ON public.order_items 
FOR SELECT USING (
  order_id IN (
    SELECT id FROM public.orders 
    WHERE customer_id IN (
      SELECT id FROM public.customers WHERE user_id = auth.uid()
    )
  )
);

CREATE POLICY "Admin full access to order_items" ON public.order_items FOR ALL USING (true);

-- Payments policies  
CREATE POLICY "Customers can view their own payments" ON public.payments 
FOR SELECT USING (
  order_id IN (
    SELECT id FROM public.orders 
    WHERE customer_id IN (
      SELECT id FROM public.customers WHERE user_id = auth.uid()
    )
  )
);

CREATE POLICY "Admin full access to payments" ON public.payments FOR ALL USING (true);