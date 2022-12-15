# Um relógio baseado em 100

## Relógio convencional

- 1 dia possui 24 horas
- 1 hora possui 60 minutos
- 1 minuto possui 60 segundos

- 1 dia possui 1.440 minutos
- 1 hora possui 3.600 segundos

- 1 dia possui 86.400 segundos

## Relógio baseado em 100

- 1 dia possui 100 centihoras
- 1 centihora possui 100 centiminutos
- 1 centiminuto possui 100 centisegundos

- 1 dia possui 10.000 centiminutos
- 1 centihora possui 10.000 centissegundos

- 1 dia 1.000.000 centissegundos

## Comparativo

### O único valor com referência nos dois âmbitos é o dia

24 horas equivalem a 100 centihoras => 1 centihora equivale a 0.24 horas

Disso, temos que:
- Em 14 minutos e 24 segundos se passa uma centihora
- Em 864 segundos se passa uma centihora

1 centihora possui 100 centiminutos => 1 centiminuto equivale a 0.0024 horas

Disso, temos que:
- 0.144 minuto equivale a 1 centiminuto
- 8.64 segundos equivale a 1 centiminuto
- 8640 milissegundos equivale a 1 centiminuto

1 centihora possui 10000 centisegundos => 1 centisegundo equivale a 0.000024 horas

Disso, temos que:
- 0.00144 minuto equivale a 1 centissegundo
- 0.0864 segundo equivale a 1 centissegundo
- 86.4 milissegundo equivale a 1 centissegundo

### Conversor

O relógio funciona como um medidor percentual de passagem do dia.
O total de milissegundos de um dia pode ser calculado da seguinte forma.

```python
milissegundos_por_dia = 24*3600*1000
```

Para obter o valor do tempo atual em milissegundos, faremos:

```python
milissegundos = (horas*3600 + minutos*60 + segundos)*1000
```

Nosso conversor funcionará assim:

```python
percentual = milissegundos/milissegundos_por_dia

centihoras = percentual % 100
centiminutos = (percentual * 100) % 100
centissegundos = (percentual * 10000) % 100
```