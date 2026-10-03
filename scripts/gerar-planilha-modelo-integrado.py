"""Gera a planilha gratuita "Modelo integrado simplificado" (DRE, Balanço e Fluxo de Caixa ligados).

Uso: python3 scripts/gerar-planilha-modelo-integrado.py public/materiais/modelo-integrado-simplificado.xlsx
"""
import sys
from openpyxl import Workbook
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter

OUT = sys.argv[1]

NAVY, AMBER, INK2 = "070D24", "F59E0B", "475569"
BLUE, GREEN = "1D4ED8", "15803D"
F_TITLE = Font(name="Calibri", size=18, bold=True, color=NAVY)
F_H = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
F_BOLD = Font(name="Calibri", size=11, bold=True, color=NAVY)
F_TXT = Font(name="Calibri", size=11, color="0F172A")
F_NOTE = Font(name="Calibri", size=10, italic=True, color=INK2)
F_IN = Font(name="Calibri", size=11, color=BLUE)          # premissa: você muda
F_CALC = Font(name="Calibri", size=11, color="000000")    # fórmula
F_LINK = Font(name="Calibri", size=11, color=GREEN)       # vem de outra aba
FILL_H = PatternFill("solid", fgColor=NAVY)
FILL_IN = PatternFill("solid", fgColor="FFF7E0")
FILL_TOT = PatternFill("solid", fgColor="F1F5F9")
FILL_OK = PatternFill("solid", fgColor="DCFCE7")
FILL_BAD = PatternFill("solid", fgColor="FEE2E2")
THIN = Side(style="thin", color="CBD5E1")
TOP = Border(top=Side(style="thin", color=NAVY))
NUM = '#,##0;(#,##0);"-"'
PCT = "0%"
YEARS = ["Ano 0", "Ano 1", "Ano 2", "Ano 3"]  # colunas C, D, E, F
FUNDAMENTOS = "https://www.mfnapratica.com.br/fundamentos?utm_source=planilha-gratuita&utm_medium=isca&utm_campaign=modelo-integrado"

wb = Workbook()


def sheet(title, widths):
    ws = wb.create_sheet(title)
    ws.sheet_view.showGridLines = False
    for i, w in enumerate(widths, start=1):
        ws.column_dimensions[get_column_letter(i)].width = w
    return ws


def header(ws, row, title, cols=YEARS, first_col=3):
    ws.cell(row=row, column=2, value=title).font = F_H
    for c in range(2, first_col + len(cols)):
        ws.cell(row=row, column=c).fill = FILL_H
    for i, y in enumerate(cols):
        cell = ws.cell(row=row, column=first_col + i, value=y)
        cell.font = F_H
        cell.alignment = Alignment(horizontal="right")


def line(ws, row, label, formulas, font=F_CALC, bold=False, total=False, fmt=NUM):
    """formulas: dict coluna -> fórmula/valor"""
    lab = ws.cell(row=row, column=2, value=label)
    lab.font = F_BOLD if bold else F_TXT
    for col, f in formulas.items():
        c = ws[f"{col}{row}"]
        c.value = f
        c.font = Font(name="Calibri", size=11, bold=bold, color=font.color)
        c.number_format = fmt
    if total:
        for col in "BCDEF":
            ws[f"{col}{row}"].fill = FILL_TOT
            ws[f"{col}{row}"].border = TOP


# ---------------------------------------------------------------- 1. Comece aqui
ws = wb.active
ws.title = "Comece aqui"
ws.sheet_view.showGridLines = False
ws.column_dimensions["A"].width = 3
ws.column_dimensions["B"].width = 4
ws.column_dimensions["C"].width = 95
r = 2
ws["B2"] = "Modelo integrado simplificado: DRE, Balanço e Fluxo de Caixa"
ws["B2"].font = F_TITLE
ws["B3"] = "Mude as premissas e veja os três demonstrativos se moverem juntos. Se o Balanço não fechar, a aba Checagem avisa."
ws["B3"].font = F_NOTE
rows = [
    ("Como usar", None),
    ("1", "Vá na aba Premissas e mude só as células azuis (receita, crescimento, custos, prazos...)."),
    ("2", "Acompanhe a DRE, o Balanço e o Fluxo de Caixa. Nenhuma outra célula precisa ser digitada."),
    ("3", "Confira a aba Checagem: a diferença do Balanço tem que ser zero em todos os anos."),
    ("Cores das células", None),
    ("■", "Azul: premissa. É o único lugar onde você digita."),
    ("■", "Preto: fórmula calculada na própria aba."),
    ("■", "Verde: número que vem de outra aba. É aqui que os demonstrativos se conectam."),
    ("O que este modelo deixa de fora, de propósito", None),
    ("•", "Dívida e juros (e o efeito deles no caixa e no lucro)"),
    ("•", "Dividendos e distribuição de lucro"),
    ("•", "Estoques e o ciclo de caixa completo"),
    ("•", "Cenários e análise de sensibilidade"),
    ("", "No curso Fundamentos da Modelagem Financeira você adiciona cada uma dessas peças sem quebrar o modelo."),
]
r = 5
for a, b in rows:
    if b is None:
        r += 1
        ws.cell(row=r, column=2, value=a).font = Font(name="Calibri", size=13, bold=True, color=NAVY)
    else:
        ca = ws.cell(row=r, column=2, value=a)
        ca.font = F_BOLD
        if a == "■":
            ca.font = Font(name="Calibri", size=13, color=BLUE if "Azul" in b else (GREEN if "Verde" in b else "000000"))
        ws.cell(row=r, column=3, value=b).font = F_TXT
    r += 1
r += 1
link = ws.cell(row=r, column=3, value="Conheça o curso Fundamentos da Modelagem Financeira →")
link.hyperlink = FUNDAMENTOS
link.font = Font(name="Calibri", size=12, bold=True, color="B45309", underline="single")
ws.cell(row=r + 2, column=3, value="Valores em R$ mil. Empresa-exemplo, sem dívida, para focar na ligação entre os demonstrativos.").font = F_NOTE
ws.cell(row=r + 3, column=3, value="Modelagem Financeira na Prática · mfnapratica.com.br").font = F_NOTE

# ---------------------------------------------------------------- 2. Premissas
ws = sheet("Premissas", [3, 44, 14, 40])
ws["B2"] = "Premissas"
ws["B2"].font = F_TITLE
ws["B3"] = "Mude só as células azuis. Valores em R$ mil."
ws["B3"].font = F_NOTE
inputs = [
    ("Operação", None, None, None),
    ("Receita no ano 1", 1000, NUM, "Faturamento líquido do primeiro ano"),
    ("Crescimento da receita por ano", 0.10, PCT, "Aplicado nos anos 2 e 3"),
    ("Custos (% da receita)", 0.60, PCT, "Custo dos produtos ou serviços vendidos"),
    ("Despesas (% da receita)", 0.20, PCT, "Vendas, gerais e administrativas"),
    ("Depreciação por ano", 50, NUM, "Reduz o lucro, mas não sai do caixa"),
    ("Investimento por ano (capex)", 60, NUM, "Compra de máquinas e equipamentos"),
    ("Alíquota de IR", 0.30, PCT, "Sobre o lucro antes do imposto"),
    ("Capital de giro", None, None, None),
    ("Prazo de recebimento dos clientes (dias)", 30, "0", "Vendas que ainda não viraram caixa"),
    ("Prazo de pagamento aos fornecedores (dias)", 30, "0", "Custos que ainda não saíram do caixa"),
    ("Saldos iniciais (Balanço do ano 0)", None, None, None),
    ("Caixa", 100, NUM, ""),
    ("Imobilizado", 500, NUM, ""),
    ("Patrimônio líquido", 600, NUM, "Ativo = Passivo + PL já no ano 0"),
]
P = {}
r = 5
for label, val, fmt, note in inputs:
    if val is None:
        r += 1
        ws.cell(row=r, column=2, value=label).font = Font(name="Calibri", size=12, bold=True, color=NAVY)
        r += 1
        continue
    ws.cell(row=r, column=2, value=label).font = F_TXT
    c = ws.cell(row=r, column=3, value=val)
    c.font, c.fill, c.number_format = F_IN, FILL_IN, fmt
    c.border = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
    ws.cell(row=r, column=4, value=note).font = F_NOTE
    P[label] = f"Premissas!$C${r}"
    r += 1

# ---------------------------------------------------------------- 3. DRE
ws = sheet("DRE", [3, 34, 12, 12, 12, 12])
ws["B2"] = "DRE (Demonstração do Resultado)"
ws["B2"].font = F_TITLE
ws["B3"] = "R$ mil. O lucro líquido vai para o Patrimônio líquido (Balanço) e para o Fluxo de Caixa."
ws["B3"].font = F_NOTE
header(ws, 5, "")
R = {}
def dre(row, key, label, f, **kw):
    R[key] = row
    line(ws, row, label, f, **kw)
yrs = "DEF"
dre(6, "rec", "Receita líquida", {"D": f"={P['Receita no ano 1']}", "E": f"=D6*(1+{P['Crescimento da receita por ano']})", "F": f"=E6*(1+{P['Crescimento da receita por ano']})"})
for c in yrs: ws[f"D6"].font = F_LINK
dre(7, "cus", "(−) Custos", {c: f"=-{c}6*{P['Custos (% da receita)']}" for c in yrs})
dre(8, "lb", "Lucro bruto", {c: f"={c}6+{c}7" for c in yrs}, bold=True, total=True)
dre(9, "desp", "(−) Despesas", {c: f"=-{c}6*{P['Despesas (% da receita)']}" for c in yrs})
dre(10, "ebitda", "EBITDA", {c: f"={c}8+{c}9" for c in yrs}, bold=True, total=True)
dre(11, "dep", "(−) Depreciação", {c: f"=-{P['Depreciação por ano']}" for c in yrs})
dre(12, "ebit", "EBIT (lucro operacional)", {c: f"={c}10+{c}11" for c in yrs}, bold=True, total=True)
dre(13, "ir", "(−) IR", {c: f"=-MAX(0,{c}12)*{P['Alíquota de IR']}" for c in yrs})
dre(14, "ll", "Lucro líquido", {c: f"={c}12+{c}13" for c in yrs}, bold=True, total=True)
ws.freeze_panes = "C6"

# ---------------------------------------------------------------- 4. Balanço
ws = sheet("Balanço", [3, 34, 12, 12, 12, 12])
ws["B2"] = "Balanço Patrimonial"
ws["B2"].font = F_TITLE
ws["B3"] = "R$ mil. O caixa vem do Fluxo de Caixa; o patrimônio soma o lucro da DRE."
ws["B3"].font = F_NOTE
header(ws, 5, "Ativo")
line(ws, 6, "Caixa", {"C": f"={P['Caixa']}", **{c: f"='Fluxo de Caixa'!{c}14" for c in yrs}}, font=F_LINK)
line(ws, 7, "Contas a receber", {"C": 0, **{c: f"=DRE!{c}6*{P['Prazo de recebimento dos clientes (dias)']}/360" for c in yrs}})
line(ws, 8, "Imobilizado", {"C": f"={P['Imobilizado']}", **{c: f"={p}8+{P['Investimento por ano (capex)']}-{P['Depreciação por ano']}" for p, c in zip("CDE", yrs)}})
line(ws, 9, "Ativo total", {c: f"=SUM({c}6:{c}8)" for c in "CDEF"}, bold=True, total=True)
header(ws, 11, "Passivo e patrimônio líquido")
line(ws, 12, "Fornecedores", {"C": 0, **{c: f"=-DRE!{c}7*{P['Prazo de pagamento aos fornecedores (dias)']}/360" for c in yrs}})
line(ws, 13, "Patrimônio líquido", {"C": f"={P['Patrimônio líquido']}", **{c: f"={p}13+DRE!{c}14" for p, c in zip("CDE", yrs)}})
for c in yrs: ws[f"{c}13"].font = F_LINK
line(ws, 14, "Passivo + PL", {c: f"={c}12+{c}13" for c in "CDEF"}, bold=True, total=True)
line(ws, 16, "Checagem: Ativo − (Passivo + PL)", {c: f"=ROUND({c}9-{c}14,6)" for c in "CDEF"}, bold=True)
ws["C6"].font = F_CALC
ws.freeze_panes = "C6"

# ---------------------------------------------------------------- 5. Fluxo de Caixa
ws = sheet("Fluxo de Caixa", [3, 40, 12, 12, 12, 12])
ws["B2"] = "Fluxo de Caixa (método indireto)"
ws["B2"].font = F_TITLE
ws["B3"] = "R$ mil. Parte do lucro e explica por que o caixa não é igual ao lucro."
ws["B3"].font = F_NOTE
header(ws, 5, "", cols=YEARS[1:], first_col=4)
line(ws, 6, "Lucro líquido", {c: f"=DRE!{c}14" for c in yrs}, font=F_LINK)
line(ws, 7, "(+) Depreciação", {c: f"=-DRE!{c}11" for c in yrs}, font=F_LINK)
line(ws, 8, "(−) Aumento de contas a receber", {c: f"=-(Balanço!{c}7-Balanço!{p}7)" for p, c in zip("CDE", yrs)}, font=F_LINK)
line(ws, 9, "(+) Aumento de fornecedores", {c: f"=Balanço!{c}12-Balanço!{p}12" for p, c in zip("CDE", yrs)}, font=F_LINK)
line(ws, 10, "Caixa das operações", {c: f"=SUM({c}6:{c}9)" for c in yrs}, bold=True, total=True)
line(ws, 11, "(−) Investimentos (capex)", {c: f"=-{P['Investimento por ano (capex)']}" for c in yrs})
line(ws, 12, "Variação do caixa", {c: f"={c}10+{c}11" for c in yrs}, bold=True, total=True)
line(ws, 13, "Caixa inicial", {c: f"=Balanço!{p}6" for p, c in zip("CDE", yrs)}, font=F_LINK)
line(ws, 14, "Caixa final", {c: f"={c}13+{c}12" for c in yrs}, bold=True, total=True)
ws.freeze_panes = "D6"

# ---------------------------------------------------------------- 6. Checagem
ws = sheet("Checagem", [3, 44, 14, 14, 14, 14])
ws["B2"] = "Checagem"
ws["B2"].font = F_TITLE
ws["B3"] = "Tudo zero = o modelo fecha. Qualquer número diferente de zero aponta uma ligação quebrada."
ws["B3"].font = F_NOTE
header(ws, 5, "")
line(ws, 6, "Ativo − (Passivo + PL)", {c: f"=Balanço!{c}16" for c in "CDEF"}, font=F_LINK)
line(ws, 7, "Caixa do Fluxo de Caixa − Caixa do Balanço", {c: f"=ROUND('Fluxo de Caixa'!{c}14-Balanço!{c}6,6)" for c in yrs}, font=F_LINK)
line(ws, 8, "Situação", {c: f'=IF(AND(ABS({c}6)<0.01,ABS(N({c}7))<0.01),"Fecha","Não fecha")' for c in "CDEF"}, bold=True, fmt="@")
for c in "CDEF":
    ws[f"{c}8"].alignment = Alignment(horizontal="right")
ws["B10"] = "Resultado do modelo"
ws["B10"].font = Font(name="Calibri", size=13, bold=True, color=NAVY)
ws["C10"] = '=IF(COUNTIF(C8:F8,"Fecha")=4,"✓ O modelo fecha nos 3 anos","✗ Há uma ligação quebrada")'
ws.merge_cells("C10:F10")
ws["C10"].font = Font(name="Calibri", size=13, bold=True, color=NAVY)
ws["C10"].alignment = Alignment(horizontal="center", vertical="center")
ws.row_dimensions[10].height = 28
for rng, fcell in (("C8:F8", "C8"), ("C10:F10", "$C$10")):
    ws.conditional_formatting.add(rng, FormulaRule(formula=[f'LEFT({fcell},1)="F"' if fcell == "C8" else f'LEFT({fcell},1)="✓"'], fill=FILL_OK, font=Font(bold=True, color=GREEN)))
    ws.conditional_formatting.add(rng, FormulaRule(formula=[f'LEFT({fcell},1)="N"' if fcell == "C8" else f'LEFT({fcell},1)="✗"'], fill=FILL_BAD, font=Font(bold=True, color="B91C1C")))

for s in wb.worksheets:
    s.sheet_properties.tabColor = {"Comece aqui": AMBER, "Premissas": BLUE, "Checagem": GREEN}.get(s.title, NAVY)
wb.active = 0
wb.save(OUT)
print("ok", OUT)
